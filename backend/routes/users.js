const express = require('express');
const router = express.Router();
const db = require('../database');

// GET all users
router.get('/', (req, res) => {
  db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// GET user by ID
router.get('/:id', (req, res) => {
  db.get('SELECT * FROM users WHERE id = ?', [req.params.id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'User not found' });
    res.json(row);
  });
});

// POST create user
router.post('/', (req, res) => {
  const { name, email, phone, company, street, city, zipcode, lat, lng } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Name and email are required' });

  const sql = `
    INSERT INTO users (name, email, phone, company, street, city, zipcode, lat, lng)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [name, email, phone, company, street, city, zipcode, lat, lng];

  db.run(sql, values, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: this.lastID, ...req.body });
  });
});

// PUT update user
router.put('/:id', (req, res) => {
  const { name, email, phone, company, street, city, zipcode, lat, lng } = req.body;

  const sql = `
    UPDATE users SET
      name = ?, email = ?, phone = ?, company = ?, street = ?,
      city = ?, zipcode = ?, lat = ?, lng = ?
    WHERE id = ?
  `;
  const values = [name, email, phone, company, street, city, zipcode, lat, lng, req.params.id];

  db.run(sql, values, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User updated' });
  });
});

// DELETE user
router.delete('/:id', (req, res) => {
  db.run('DELETE FROM users WHERE id = ?', [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });
  });
});

module.exports = router;


// const express = require('express');
// const router = express.Router();

// // Define routes here, e.g.
// router.get('/', (req, res) => {
//   res.send('Hello users');
// });

// module.exports = router;

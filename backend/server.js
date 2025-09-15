const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:5000:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('User Management API is running!');
});

// const express = require('express');
// const cors = require('cors');
// const db = require('./database');
// const userRoutes = require('./routes/users');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/users', userRoutes);

// // ✅ Test user insertion (after table creation)
// const insertTestUser = () => {
//   const email = 'john@test.com';

//   db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, row) => {
//     if (err) {
//       console.error('Select failed:', err.message);
//     } else if (!row) {
//       db.run(
//         `INSERT INTO users (name, email, phone, company, street, city, zipcode, lat, lng)
//          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
//         ['John Test', email, '1234567890', 'Test Inc', '123 Test St', 'Testville', '12345', '0.0', '0.0'],
//         function (err) {
//           if (err) {
//             console.error('❌ Failed to insert test user:', err.message);
//           } else {
//             console.log(`✅ Test user inserted with ID: ${this.lastID}`);
//           }
//         }
//       );
//     } else {
//       console.log('⚠️ Test user already exists. Skipping insert.');
//     }
//   });
// };

// // ⏬ Call it here after app setup
// insertTestUser();

// // Start server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

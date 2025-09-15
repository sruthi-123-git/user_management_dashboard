const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = "users.db";

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error("Could not connect to database", err);
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      phone TEXT,
      company TEXT,
      street TEXT,
      city TEXT,
      zipcode TEXT,
      lat TEXT,
      lng TEXT
    )`, (err) => {
      if (err) {
        console.error('Error creating users table', err);
      } else {
        console.log('Users table ready');
      }
    });
  }
});

module.exports = db;

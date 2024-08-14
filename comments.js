// Create web server
// Create a web server that listens on port 3000 and responds with the comments from the database.

const express = require('express');
const app = express();
const db = require('./db');

app.get('/comments', (req, res) => {
  db.query('SELECT * FROM comments', (err, data) => {
    if (err) {
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
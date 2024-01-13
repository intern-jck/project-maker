const express = require('express');
const app = express();
const PORT = 3000;

const db = require('./db/db.js');

app.get('/', (req, res) => {
  db.select_all((error, results) => {
    if (error) {
      console.error(error);
    }
    res.json({
      data: results,
    });
  });
});

app.listen(PORT, () => {
  console.log(`P Maker App Listening @ IP: 127.0.0.1 PORT: ${PORT}`);
});

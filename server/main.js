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

app.post('/add_project', (req, res) => {
  const timestamp = Date.now();
  console.log(`INSERT @ ${timestamp}`);

  // Can change this to POST body
  const project_sql = `
  INSERT INTO projects (
    project_id,
    slug,
    name,
    url,
    client,
    client_rul,
    start_date,
    end_date,
    short,
    description
    ) 
  VALUES (
    ${timestamp}, 
    'test_slug',  
    'test_name',
    'test_url',
    'test_client',
    'test_client_url',
    'test_start',
    'test_end',
    'test_short',
    'test_description'
    );`;

  console.log(project_sql);
  db.insert(project_sql, (error, results) => {
    if (error) {
      console.error(error);
      res.json({
        msg: `insert error ${error}`,
      });
    }
    res.json({
      msg: 'insert success',
    });
  });
});

app.listen(PORT, () => {
  console.log(`P Maker App Listening @ IP: 127.0.0.1 PORT: ${PORT}`);
});

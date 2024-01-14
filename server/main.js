const express = require('express');
const app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

const PORT = 3000;

const db = require('./db/db.js');

app.use(cors());
// parse application/json
app.use(bodyParser.json());

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

app.get('/project', (req, res) => {
  console.log(req.query);
  // res.json({ msg: 'ok' });

  db.select_project(req.query.project_id, (error, results) => {
    if (error) {
      console.error(error);
      res.json({ msg: 'error!' });
    }
    res.json({
      data: results,
    });
  });
});

app.post('/create_project', (req, res) => {
  const timestamp = Date.now();

  // Can change this to POST body
  // const project_sql = `
  // INSERT INTO projects (
  //   project_id,
  //   slug,
  //   name,
  //   url,
  //   client,
  //   client_rul,
  //   start_date,
  //   end_date,
  //   short,
  //   description
  //   )
  // VALUES (
  //   ${timestamp},
  //   'default_slug',
  //   'default_name',
  //   'default_url',
  //   'default_client',
  //   'default_client_url',
  //   'default_start',
  //   'default_end',
  //   'default_short',
  //   'default_description'
  //   );`;

  console.log(req.body);
  res.json({ msg: 'ok!' });

  // db.insert(project_sql, (error, results) => {
  //   if (error) {
  //     console.error(error);
  //     res.json({
  //       msg: `insert error ${error}`,
  //     });
  //   }
  //   res.json({
  //     msg: 'insert success',
  //   });
  // });
});

app.put('/save_project', (req, res) => {
  console.log(req.body);
  db.update_project(req.body, (error, results) => {
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

const express = require('express');
const app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

const PORT = 3000;

const db = require('./db/db.js');
const sql = require('./db/sql.js');

app.use(cors());
// parse application/json
app.use(bodyParser.json());

// Index route
app.get('/', (req, res) => {
  res.json({
    msg: 'hello',
  });
});

// GET /projects
// Gets all projects
app.get('/projects', (req, res) => {
  db.select_all_projects((error, results) => {
    if (error) {
      console.error(error);
    }
    res.json({
      data: results,
    });
  });
});

// GET /folders
// Gets all folders
app.get('/folders', (req, res) => {
  db.select_all_folders((error, results) => {
    if (error) {
      console.error(error);
    }
    res.json({
      data: results,
    });
  });
});

// GET /project?project_id=<PROJECT_ID>
// Get a project based on it's project id
app.get('/project', (req, res) => {
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

// GET /create_project
// Create a new project with default info
app.get('/create_project', (req, res) => {
  db.insert(sql.createInsertProjectSql(), (error, results) => {
    if (error) {
      console.error(error);
      res.json({
        msg: `create_project error ${error}`,
      });
    }
    res.json({
      data: results,
    });
  });
});

// PUT /save_project
// body: { CURRENT_PROJECT_FORM_DATA }
// Updates the current project's entry in the database
app.put('/save_project', (req, res) => {
  db.update_project(req.body, (error) => {
    if (error) {
      console.error(error);
      res.json({
        msg: `save_project error ${error}`,
      });
    }
    res.json({
      data: 'success',
    });
  });
});

// DELETE /project
// Deletes project from database
app.delete('/project', (req, res) => {
  db.delete_project(req.body, (error) => {
    if (error) {
      console.error(error);
      res.json({
        msg: `delete_project error ${error}`,
      });
    }
    res.json({
      data: 'success',
    });
  });
});

app.listen(PORT, () => {
  console.log(`P Maker App Listening @ IP: 127.0.0.1 PORT: ${PORT}`);
});

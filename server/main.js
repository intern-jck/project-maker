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

// GET /folders
// Gets all folders
app.get('/folders', (req, res) => {
  console.log('getting folders');
  db.select_all_folders((error, results) => {
    if (error) {
      console.error(error);
    }
    res.json({
      data: results,
    });
  });
});

// GET /create_folder
// Creates a folder in table
app.get('/create_folder', (req, res) => {
  console.log(req.query);
  db.create_folder(req.query.folder_name, (error, results) => {
    if (error) {
      console.error(error);
    }
    res.json({
      data: results,
    });
  });
});

// DELETE /folder
// Deletes folder from database
app.delete('/folder/:id', (req, res) => {
  const { id } = req.params;

  db.delete_folder(id, (error) => {
    if (error) {
      console.error(error);
      res.json({
        msg: `delete folder error ${error}`,
      });
    }
    res.json({
      data: 'success',
    });
  });
});

// GET /projects
// Gets all projects
app.get('/projects', (req, res) => {
  db.select_all_projects((error, results) => {
    console.log('getting projects');
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
  console.log('create_project');
  db.create_project((error, results) => {
    if (error) {
      console.error(error);
      res.json({
        msg: `create_project error ${error}`,
      });
    }
    res.json({
      data: 'success',
    });
  });
});

// PUT /save_project
// body: { CURRENT_PROJECT_FORM_DATA }
// Updates the current project's entry in the database
app.put('/project', (req, res) => {
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
app.delete('/project/:id', (req, res) => {
  const { id } = req.params;
  db.delete_project(id, (error) => {
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

const express = require('express');
const app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

const PORT = 3000;

const db = require('./db/db.js');
// const sql = require('./db/sql.js');

app.use(cors());
app.use(bodyParser.json());

/**
 * INDEX ROUTE
 */

// GET /
app.get('/', (req, res) => {
  res.json({
    msg: 'hello',
  });
});

/**
 * FOLDER ROUTES
 */

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

// GET /create_folder
// Creates a folder in table
app.get('/create_folder', (req, res) => {
  db.create_folder(req.query.folder_name, (error, results) => {
    if (error) {
      console.error(error);
    }
    res.json({
      data: results,
    });
  });
});

// DELETE /folder/<FOLDER_ID>
// Deletes folder from database
app.delete('/folder/:id', (req, res) => {
  db.delete_folder(req.params.id, (error) => {
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

/**
 * PROJECT ROUTES
 */

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

// GET /folder_prjects?folder_id=<FOLDER_ID>
// Gets all projects by folder id
app.get('/folder_projects', (req, res) => {
  db.select_projects_by_folder(req.query.folder_id, (error, results) => {
    if (error) {
      console.error(error);
    }
    console.log(results);
    res.json({
      data: results,
    });
  });
});

// GET /create_project
// Create a new project with default info
app.get('/create_project', (req, res) => {
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

// DELETE /project/<PROJECT_ID>
// Deletes project from database
app.delete('/project/:id', (req, res) => {
  db.delete_project(req.params.id, (error) => {
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

/**
 * PHOTOS ROUTES
 */

app.get('/photos/:id', (req, res) => {
  res.json({ msg: `ok: ${req.params.id}` });
});

app.listen(PORT, () => {
  console.log(`P Maker App Listening @ http://127.0.0.1:${PORT}`);
});

const sqlite3 = require('sqlite3');
const { ProjectsModel, ProjectTechTagsModel, TechTagsModel, PhotosModel } = require('./models.js');

const db = new sqlite3.Database('./server/db/projects.db', sqlite3.OPEN_READWRITE, (err) => {
  console.log('INITIALIZING DATABASE');
  if (err && err.code == 'SQLITE_CANTOPEN') {
    createDatabase();
    return;
  } else if (err) {
    console.log('Getting error ' + err);
    exit(1);
  }
});

function createDatabase() {
  const pMakerDB = new sqlite3.Database('./server/db/projects.db', (err) => {
    if (err) {
      console.log('Getting error ' + err);
      exit(1);
    }
    console.log(ProjectsModel);
    createTables(pMakerDB, ProjectsModel);
  });
}

function createTables(database, table_model) {
  database.exec(table_model);
}

// CRUD
function insert(sql, callback) {
  return db.exec(sql, (error, cols) => {
    if (error) {
      console.log(`insert error: ${error}`);
    }
    callback(error, cols);
  });
}

function select_all(callback) {
  return db.all(`SELECT * FROM projects`, (error, rows) => {
    if (error) {
      console.log(`select_all error: ${error}`);
    }
    callback(error, rows);
  });
}

function select_project(project_id, callback) {
  return db.all(`SELECT * FROM projects WHERE project_id='${project_id}'`, (error, rows) => {
    if (error) {
      console.log(`select_project error: ${error}`);
    }
    callback(error, rows);
  });
}

// function update_project(project_id, callback) {
//   return db.all(`UPDATE projects FROM projects WHERE project_id='${project_id}'`, (error, rows) => {
//     if (error) {
//       console.log(`update_project error: ${error}`);
//     }
//     callback(error, rows);
//   });
// }

function delete_project(project_id, callback) {
  return db.all(`DELETE FROM projects WHERE project_id='${project_id}'`, (error, rows) => {
    if (error) {
      console.log(`delete_project error: ${error}`);
    }
    callback(error, rows);
  });
}

module.exports = {
  select_all,
  insert,
};

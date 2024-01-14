const sqlite3 = require('sqlite3');
const {
  ProjectsModel,
  FoldersModel,
  ProjectTechTagsModel,
  TechTagsModel,
  PhotosModel,
} = require('./models.js');

const db = new sqlite3.Database(
  './server/db/projects.db',
  sqlite3.OPEN_READWRITE,
  (err) => {
    console.log('INITIALIZING DATABASE');

    if (err && err.code == 'SQLITE_CANTOPEN') {
      console.log('DATABASE NOT FOUND');
      createDatabase();
      return;
    } else if (err) {
      console.log('Getting error ' + err);
      exit(1);
    }
  }
);

function createDatabase() {
  const pMakerDB = new sqlite3.Database('./server/db/projects.db', (err) => {
    if (err) {
      console.log('Getting error ' + err);
      exit(1);
    }
    createTable(pMakerDB, ProjectsModel);
    createTable(pMakerDB, FoldersModel);
  });
}

function createTable(database, table_model) {
  database.exec(table_model);
}

// CRUD
function insert(sql, callback) {
  return db.exec(sql, (error, cols) => {
    if (error) {
      console.log(`insert error: ${error}`);
    }
    console.log(`INSERT: ${cols}`);
    callback(error);
  });
}

function select_all_projects(callback) {
  return db.all(`SELECT * FROM projects`, (error, rows) => {
    if (error) {
      console.log(`select_all error: ${error}`);
    }
    callback(error, rows);
  });
}

function select_project(project_id, callback) {
  return db.all(
    `SELECT * FROM projects WHERE project_id='${project_id}'`,
    (error, rows) => {
      if (error) {
        console.log(`select_project error: ${error}`);
      }
      console.log(rows);

      callback(error, rows);
    }
  );
}

function update_project(project_data, callback) {
  return db.exec(
    `UPDATE projects 
    SET
      name = '${project_data.name}',
      slug = '${project_data.slug}',
      url = '${project_data.url}',
      client = '${project_data.client}',
      client_rul = '${project_data.client_url}',
      start_date = '${project_data.start_date}',
      end_date = '${project_data.end_date}',
      short = '${project_data.short}',
      description = '${project_data.description}'
    WHERE project_id = ${project_data.project_id};
    `,
    (error) => {
      if (error) {
        console.log(`update_project error: ${error}`);
      }
      callback(error);
    }
  );
}

function delete_project(project_id, callback) {
  return db.exec(
    `DELETE FROM projects WHERE project_id='${project_id}'`,
    (error) => {
      if (error) {
        console.log(`delete_project error: ${error}`);
      }
      callback(error);
    }
  );
}

module.exports = {
  insert,
  select_all_projects,
  select_project,
  update_project,
};

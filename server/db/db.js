const sqlite3 = require('sqlite3');
const {
  ProjectsModel,
  FoldersModel,
  ProjectTechTagsModel,
  TechTagsModel,
  PhotosModel,
} = require('./models.js');

// Initialize database
const db = new sqlite3.Database(
  './server/db/projects.db',
  sqlite3.OPEN_READWRITE,
  (err) => {
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

// Creates projects and folders databases
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

// Create a table with a give model.
// See models.js for SQL to create tables
function createTable(database, table_model) {
  database.exec(table_model);
}

function create_folder(folder_name, callback) {
  if (!folder_name) {
    folder_name = '';
  }
  const timestamp = Date.now();

  const sqlCreateFolder = `
    INSERT INTO folders(folder_id,name)
    VALUES(${timestamp}, '${folder_name}');`;

  // return db.exec(sql, (error) => {
  //   if (error) {
  //     console.log(`create_folder error: ${error}`);
  //   }
  //   callback(error);
  // });

  return db.serialize(() => {
    db.run(sqlCreateFolder).all(sqlSelectAllFolders, (error, rows) => {
      if (error) {
        console.log(`create_folder error: ${error}`);
      }
      callback(error, rows);
    });
  });
}

function select_all_folders(callback) {
  return db.all(`SELECT * FROM folders`, (error, rows) => {
    if (error) {
      console.log(`select_all_folders error: ${error}`);
    }
    callback(error, rows);
  });
}

function delete_folder(folder_id, callback) {
  return db.exec(
    `DELETE FROM folders 
    WHERE folder_id=${folder_id}`,
    (error) => {
      if (error) {
        console.log(`delete_project error: ${error}`);
      }
      callback(error);
    }
  );
}

// PROJECTS
function create_project(callback) {
  const timestamp = Date.now();
  const defaultDate = new Date().toISOString().split('T')[0];

  const sql = `
    INSERT INTO projects (
      project_id,
      folder_id,
      slug,
      name,
      url,
      client,
      client_url,
      start_date,
      end_date,
      short,
      description
      )
    VALUES (
      ${timestamp}, 
      0,
      'default_slug',
      'default_name',
      'default_url',
      'default_client',
      'default_client_url',
      '${defaultDate}',
      '${defaultDate}',
      'default_short',
      'default_description'
      );`;

  return db.exec(sql, (error) => {
    if (error) {
      console.log(`create_folder error: ${error}`);
    }
    callback(error);
  });
}

function select_all_projects(callback) {
  return db.all(`SELECT * FROM projects`, (error, rows) => {
    if (error) {
      console.log(`select_all_projects error: ${error}`);
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
      callback(error, rows);
    }
  );
}

function select_projects_by_folder(folder_id, callback) {
  if (!folder_id) {
    select_all_projects(callback);
  }

  return db.all(
    `SELECT * FROM projects WHERE folder_id=${folder_id}`,
    (error, rows) => {
      if (error) {
        console.log(`select_project_by_folder error: ${error}`);
      }
      callback(error, rows);
    }
  );
}

function update_project(project_data, callback) {
  return db.exec(
    `UPDATE projects 
    SET
      name = '${project_data.name}',
      folder_id = '${parseInt(project_data.folder_id)}',
      slug = '${project_data.slug}',
      url = '${project_data.url}',
      client = '${project_data.client}',
      client_url = '${project_data.client_url}',
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
    `DELETE FROM projects 
    WHERE project_id=${project_id}`,
    (error) => {
      if (error) {
        console.log(`delete_project error: ${error}`);
      }
      callback(error);
    }
  );
}

module.exports = {
  create_folder,
  select_all_folders,
  delete_folder,
  create_project,
  select_all_projects,
  select_project,
  select_projects_by_folder,
  update_project,
  delete_project,
};

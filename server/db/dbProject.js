const db = require("../db/db.js");

// PROJECTS

function select_projects(callback) {
  return db.all(`SELECT project_id, name FROM projects`, (error, rows) => {
    if (error) {
      console.log(`select_projects error: ${error}`);
    }
    callback(error, rows);
  });

  return new Promise((resolve, reject) => {
    db.exec(sql, (error, rows) => {
      if (error) {
        reject(error);
      }
      resolve;
    });
  });
}

function select_project(project_id, callback) {
  return db.all(
    `SELECT * FROM projects WHERE project_id=${project_id};`,
    (error, project) => {
      if (error) {
        console.log(`select_project error: ${error}`);
      }

      db.all(
        `SELECT * FROM photos WHERE photo_project_id=${project_id};`,
        (error, photos) => {
          if (error) {
            console.log(`select_project error: ${error}`);
          }
          callback(error, { project, photos });
        }
      );
    }
  );
}

function create_project(callback) {
  const timestamp = Date.now();
  const defaultDate = new Date().toISOString().split("T")[0];

  const sql = `
      INSERT INTO projects (
        id,
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

  //   return db.exec(sql, (error) => {
  //     if (error) {
  //       console.log(`create_project error: ${error}`);
  //     }
  //     callback(error);
  //   });

  return new Promise((resolve, reject) => {
    db.exec(sql, (error) => {
      if (error) {
        reject(error);
      }
      resolve(true);
    });
  });
}

function select_projects_by_folder(folder_id, callback) {
  if (!folder_id) {
    select_projects(callback);
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
  console.log(
    `DELETE FROM projects
      WHERE project_id=${project_id}`
  );
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
  create_project,
  select_projects,
  select_project,
  select_projects_by_folder,
};

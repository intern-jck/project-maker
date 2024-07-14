const db = require("../db/db.js");

// PROJECTS

function selectProjects() {
  const sql = `SELECT id, name FROM projects`;

  // Use callback
  // return db.all(sql, (error, rows) => {
  //     if (error) {
  //       console.log(`select_projects error: ${error}`);
  //     }
  //     callback(error, rows);
  //   });

  // Use promise
  return new Promise((resolve, reject) => {
    db.all(sql, (error, rows) => {
      if (error) {
        reject(error);
      }
      resolve(rows);
    });
  });
}

function selectProject(id) {
  //   return db.all(
  //     `SELECT * FROM projects WHERE project_id=${project_id};`,
  //     (error, project) => {
  //       if (error) {
  //         console.log(`select_project error: ${error}`);
  //       }

  //       db.all(
  //         `SELECT * FROM photos WHERE photo_project_id=${project_id};`,
  //         (error, photos) => {
  //           if (error) {
  //             console.log(`select_project error: ${error}`);
  //           }
  //           callback(error, { project, photos });
  //         }
  //       );
  //     }
  //   );

  const sql = `SELECT * FROM projects WHERE id=${id};`;

  // Use Promise
  return new Promise((resolve, reject) => {
    db.all(sql, (error, project) => {
      if (error) {
        reject(error);
      }
      resolve(project);
    });
  });
}

function createProject(data) {
  //   const timestamp = Date.now();
  const defaultDate = new Date(data.timestamp).toISOString().split("T")[0];
  console.log(data, defaultDate);

  const sql = `
      INSERT INTO projects (
        created_on,
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
        ${data.timestamp},
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

function updateProject(data) {
  const sql = `
  UPDATE projects
    SET
      name = '${data.name}',
      folder_id = '${parseInt(data.folder_id)}',
      slug = '${data.slug}',
      url = '${data.url}',
      client = '${data.client}',
      client_url = '${data.client_url}',
      start_date = '${data.start_date}',
      end_date = '${data.end_date}',
      short = '${data.short}',
      description = '${data.description}'
    WHERE id = ${data.id};
    `;

//   return db.exec(sql, (error) => {
//     if (error) {
//       console.log(`update_project error: ${error}`);
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
  selectProjects,
  selectProject,
  createProject,
  updateProject,
};

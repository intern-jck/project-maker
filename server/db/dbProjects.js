const db = require("./db.js");

function selectProjects() {
  const sql = `SELECT id, name FROM projects;`;

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
  const sql = `SELECT * FROM projects WHERE id=${id};`;

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
  const defaultDate = new Date(data.timestamp).toISOString().split("T")[0];

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
        'default_description');
        `;

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

  return new Promise((resolve, reject) => {
    db.exec(sql, (error) => {
      if (error) {
        reject(error);
      }
      resolve(true);
    });
  });
}

function deleteProject(id) {
  const sql = `DELETE FROM projects WHERE id=${id};`;

  return new Promise((resolve, reject) => {
    db.exec(sql, (error) => {
      if (error) {
        reject(error);
      }
      resolve(true);
    });
  });
}

module.exports = {
  selectProjects,
  selectProject,
  createProject,
  updateProject,
  deleteProject,
};

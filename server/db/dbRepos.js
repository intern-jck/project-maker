const db = require("./db.js");

function selectProjectRepos(id) {
  const sql = `SELECT * FROM repos WHERE project_id = ${id}`;

  return new Promise((resolve, reject) => {
    db.all(sql, (error, rows) => {
      if (error) {
        reject(error);
      }
      resolve(rows);
    });
  });
}

function insertRepo(data) {
  const sql = `
    INSERT INTO repos (
    project_id,
    name,
    url
    )
    VALUES (
    ${data.projectId},
    '${data.name}',
    '${data.url}'
    );
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

function updateRepo(data) {
  const sql = `
      UPDATE repos
        SET
        project_id = ${data.projectId},
        name = '${data.name}',
        url = '${data.url}'
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

function deleteRepo(id) {
  const sql = `DELETE FROM repos WHERE id = ${id};`;

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
  selectProjectRepos,
  insertRepo,
  updateRepo,
  deleteRepo,
};

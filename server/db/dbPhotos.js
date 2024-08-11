const db = require("../db/db.js");

function selectPhotos() {
  const sql = `SELECT * FROM photos;`;

  return new Promise((resolve, reject) => {
    db.all(sql, (error, rows) => {
      if (error) {
        reject(error);
      }
      resolve(rows);
    });
  });
}

function selectProjectPhotos(photo_project_id) {
  const sql = `SELECT * FROM photos WHERE photo_project_id=${photo_project_id};`;

  return new Promise((resolve, reject) => {
    db.all(sql, (error, rows) => {
      if (error) {
        reject(error);
      }
      resolve(rows);
    });
  });
}

function insertPhoto(data) {

  const sql = `
      INSERT INTO photos (
        photo_project_id,
        created_on,
        url,
        name
        )
      VALUES (
        ${data.photo_project_id},
        ${data.created_on},
        '${data.url}',
        '${data.name}'
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

function updatePhoto(data) {

  if (!Object.keys(data).length) {
    return false;
  }

  const { id, photo_project_id, created_on, url, name } = data;

  const sql = `      
    INSERT OR REPLACE INTO photos (
      id,
      photo_project_id,
      created_on,
      url,
      name
    )
    VALUES (
      (SELECT id FROM photos WHERE id=${id}),
      ${photo_project_id},
      ${created_on},
      '${url}',
      '${name}'
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

function deletePhoto(id) {
  const sql = `DELETE FROM photos WHERE id = ${id};`;

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
  selectPhotos,
  selectProjectPhotos,
  insertPhoto,
  updatePhoto,
  deletePhoto,
};

const db = require("../db/db.js");

function selectPhotos(id) {

  const sql = `SELECT * FROM photos WHERE project_id=${id};`;

  return new Promise((resolve, reject) => {
    db.all(sql, (error, rows) => {
      if (error) {
        reject(error);
      }
      resolve(rows);
    });
  });
}

function selectProjectPhotos(id) {
  const sql = `SELECT * FROM photos WHERE photo_project_id=${id};`;

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
  const sql = `
      UPDATE photos
        SET
        photo_project_id = ${data.photo_project_id},
        url = '${data.url}',
        name = '${data.name}'
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

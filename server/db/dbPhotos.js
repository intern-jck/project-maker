const db = require("../db/db.js");


function selectPhotos(id) {
  const sql = `SELECT * FROM photos WHERE photo_project_id=${id}`;

  return new Promise((resolve, reject) => {
    db.all(sql, (error, rows) => {
      if (error) {
        reject(error);
      }
      resolve(rows);
    });
  });

  // return db.all(
  //   `SELECT * FROM photos WHERE project_photo_id=${project_id}`,
  //   (error, rows) => {
  //     if (error) {
  //       console.log(`select_photo error: ${error}`);
  //     }
  //     callback(rows);
  //   }
  // );
}

function insertPhoto(data) {
  const sql = `
      INSERT INTO photos (
        photo_project_id,
        created_on,
        name,
        url,
        )
      VALUES (
        ${data.project_id},
        ${data.timestamp},
        ${data.name},
        ${data.url},
        );`;

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
        photo_project_id = '${data.project_id}',
        name = ${data.name},
        url = ${data.url},
        WHERE created_on = ${data.created_on};
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
  const sql = `DELETE FROM photos WHERE created_on = ${id}`;

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
  insertPhoto,
  updatePhoto,
  deletePhoto,
};

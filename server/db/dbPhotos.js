const db = require("../db/db.js");

function selectPhotos() {
  const sql = `SELECT * FROM photos;`;
  // const sql = `SELECT * FROM photos WHERE project_id=${id};`;

  return new Promise((resolve, reject) => {
    db.all(sql, (error, rows) => {
      // console.log(rows);
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

function insertPhoto(id, data) {
  console.log("insert photo", id, data);

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
  console.log('update photo:\n', data);
  // return false;

  if (!Object.keys(data).length) {
    return false;
  }

  const { id, photo_project_id, created_on, url, name } = data;

  /**
   * 
   * 
  
  FOR:
  
  CREATE TABLE Book 
    ID     INTEGER PRIMARY KEY AUTOINCREMENT,
    Name   VARCHAR(60) UNIQUE,
    TypeID INTEGER,
    Level  INTEGER,
    Seen   INTEGER

   insert or replace into Book (ID, Name, TypeID, Level, Seen) values
  ((select ID from Book where Name = "SearchName"), "SearchName", ...);

    INSERT OR REPLACE INTO photos (
      id,
      project_id,
      created_on,
      url,
      name
    )
    VALUES (
      (SELECT id FROM photos WHERE id=${id}),
      {project_id},
      {created_on},
      {url},
      {name}
    );
   * 
   */

  // const sql = `
  //     UPDATE photos
  //       SET
  //       photo_project_id = ${id},
  //       url = '${data.url}',
  //       name = '${data.name}'
  //     WHERE id = ${data.id};
  //       `;

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

  console.log(sql);

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

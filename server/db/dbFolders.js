const db = require("./db.js");

// Folders
function insertFolder(data) {

  const sql = `
      INSERT INTO folders(name, created_on)
      VALUES('${data.name}', ${data.timestamp});
      `;

  console.log('sql: ', sql)

  return new Promise((resolve, reject) => {
    db.exec(sql, (error) => {
      if (error) {
        console.log('ERROR: inserted folder')
        reject(error);
      }
      console.log('inserted folder')
      resolve(true);
    });
  });
}

function selectFolders() {
  const sql = `SELECT * FROM folders`;

  return new Promise((resolve, reject) => {
    db.all(sql, (error, rows) => {
      if (error) {
        reject(error);
      }
      resolve(rows);
    });
  });
}

function selectFolder(id) {
  const sql = `SELECT * FROM folders WHERE id=${id}`;

  return new Promise((resolve, reject) => {
    db.all(sql, (error, rows) => {
      if (error) {
        reject(error);
      }
      resolve(rows);
    });
  });
}

function deleteFolder(id) {
  const sql = `DELETE FROM folders WHERE id=${id};`;

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
  insertFolder,
  selectFolders,
  selectFolder,
  deleteFolder,
};

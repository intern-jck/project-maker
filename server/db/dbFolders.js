const db = require("./db.js");

// Folders
function createFolder(name) {
  const timestamp = new Date(data.timestamp).toISOString().split("T")[0];

  const sql = `
      INSERT INTO folders(name)
      VALUES(${timestamp}, '${folder_name}');
      `;

  return new Promise((resolve, reject) => {
    db.exec(sql, (error) => {
      if (error) {
        reject(error);
      }
      resolve(true);
    });
  });

  //     if (!folder_name) {
  //   folder_name = "";
  // }

  // const timestamp = Date.now();

  // const sqlCreateFolder = `
  //     INSERT INTO folders(name)
  //     VALUES(${timestamp}, '${folder_name}');`;

  // return db.serialize(() => {
  //   db.run(sqlCreateFolder).all(sqlSelectAllFolders, (error, rows) => {
  //     if (error) {
  //       console.log(`create_folder error: ${error}`);
  //     }
  //     callback(error, rows);
  //   });
  // });
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

  // return db.all(`SELECT * FROM folders`, (error, rows) => {
  //   if (error) {
  //     console.log(`select_all_folders error: ${error}`);
  //   }
  //   callback(error, rows);
  // });
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

  // return db.all(`SELECT * FROM folders`, (error, rows) => {
  //   if (error) {
  //     console.log(`select_all_folders error: ${error}`);
  //   }
  //   callback(error, rows);
  // });
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

  // return db.exec(
  //   `DELETE FROM folders
  //     WHERE folder_id=${folder_id}`,
  //   (error) => {
  //     if (error) {
  //       console.log(`delete_project error: ${error}`);
  //     }
  //     callback(error);
  //   }
  // );
}

// function select_projects_by_folder(folder_id, callback) {
//   if (!folder_id) {
//     select_projects(callback);
//   }

//   return db.all(
//     `SELECT * FROM projects WHERE folder_id=${folder_id}`,
//     (error, rows) => {
//       if (error) {
//         console.log(`select_project_by_folder error: ${error}`);
//       }
//       callback(error, rows);
//     }
//   );
// }

module.exports = {
  createFolder,
  selectFolders,
  selectFolder,
  deleteFolder,
};

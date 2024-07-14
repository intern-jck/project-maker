// Folders
function create_folder(folder_name, callback) {
  if (!folder_name) {
    folder_name = "";
  }
  const timestamp = Date.now();

  const sqlCreateFolder = `
      INSERT INTO folders(folder_id,name)
      VALUES(${timestamp}, '${folder_name}');`;

  return db.serialize(() => {
    db.run(sqlCreateFolder).all(sqlSelectAllFolders, (error, rows) => {
      if (error) {
        console.log(`create_folder error: ${error}`);
      }
      callback(error, rows);
    });
  });
}

function select_all_folders(callback) {
  return db.all(`SELECT * FROM folders`, (error, rows) => {
    if (error) {
      console.log(`select_all_folders error: ${error}`);
    }
    callback(error, rows);
  });
}

function delete_folder(folder_id, callback) {
  return db.exec(
    `DELETE FROM folders
      WHERE folder_id=${folder_id}`,
    (error) => {
      if (error) {
        console.log(`delete_project error: ${error}`);
      }
      callback(error);
    }
  );
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
// module.exports = {
//   db,
//   create_folder,
//   select_all_folders,
//   delete_folder,
//   create_project,
//   select_projects,
//   select_project,
//   select_projects_by_folder,
//   update_project,
//   delete_project,
//   select_photos,
//   insert_photo,
// };

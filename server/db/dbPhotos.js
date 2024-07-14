/**
 * PHOTOS TABLE
 */
function select_photos(project_id, callback) {
  return db.all(
    `SELECT * FROM photos WHERE project_photo_id=${project_id}`,
    (error, rows) => {
      if (error) {
        console.log(`select_photo error: ${error}`);
      }
      callback(rows);
    }
  );
}

function insert_photo(photo_data, callback) {
  const sql = `
      INSERT INTO photos (
        project_photo_id,
        name,
        url,
        )
      VALUES (
        ${photo_data.project_id},
        ${photo_data.name},
        ${photo_data.url},
        );`;

  return db.exec(sql, (error) => {
    if (error) {
      console.log(`insert_photo error: ${error}`);
    }
    callback(error);
  });
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

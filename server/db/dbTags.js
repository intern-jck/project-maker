const db = require("./db.js");

function selectTags(id) {
  const sql = `SELECT * FROM tags WHERE project_id = ${id}`;

  return new Promise((resolve, reject) => {
    db.all(sql, (error, rows) => {
      if (error) {
        reject(error);
      }
      resolve(rows);
    });
  });
}

module.exports = {
  selectTags,
};

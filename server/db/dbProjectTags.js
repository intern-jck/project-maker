const db = require("./db.js");

function selectProjectTags(id) {
  let sql = `
    SELECT tags.name FROM tags
    JOIN project_tags ON tags.id = tag_id
    JOIN projects ON project_id = projects.id
    WHERE projects.id = ${id};
  `;

//   let sql = `
//   SELECT * FROM project_tags;
// `;

  return new Promise((resolve, reject) => {
    db.all(sql, (error, rows) => {
      if (error) {
        reject(error);
      }
      console.log(rows);
      resolve(rows);
    });
  });
}

function insertProjectTag(data) {
  const sql = `
    INSERT INTO project_tags (
    project_id,
    tag_id
    )
    VALUES (
    '${data.project_id}',
    '${data.tag_id}'
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

function updateProjectTag(data) {
  const sql = `
      UPDATE tags
        SET
        project_id = '${data.project_id}',
        tag_id = '${data.tag_id}'
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

function deleteProjectTag(id) {
  const sql = `DELETE FROM tags WHERE id = ${id};`;

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
  selectProjectTags,
  insertProjectTag,
  updateProjectTag,
  deleteProjectTag,
};

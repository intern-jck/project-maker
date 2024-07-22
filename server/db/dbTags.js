const db = require("./db.js");

function selectTags(id) {
  let sql = `
    SELECT * FROM tags;
`;

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

function insertTag(data) {
  const sql = `
    INSERT INTO tags (
    name,
    url
    )
    VALUES (
    '${data.name}',
    '${data.url}'
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

function updateTag(data) {
  const sql = `
      UPDATE tags
        SET
        name = '${data.name}',
        url = '${data.url}'
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

function deleteTag(id) {
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
  selectTags,
  insertTag,
  updateTag,
  deleteTag,
};

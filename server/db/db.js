const sqlite3 = require("sqlite3");

const {
  ProjectsModel,
  PhotosModel,
  // FoldersModel,
  // TechTagsModel,
  // ProjectTechTagsModel,
} = require("./schemas.js");

// Initialize database
const db = new sqlite3.Database(
  "./server/db/projects.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err && err.code == "SQLITE_CANTOPEN") {
      console.log("DATABASE NOT FOUND");
      createDatabase();
      return;
    } else if (err) {
      console.log("Error" + err);
      exit(1);
    }
  }
);

// Creates projects and folders databases
function createDatabase() {
  const pMakerDB = new sqlite3.Database("./server/db/projects.db", (err) => {
    if (err) {
      console.log("Create Database Error " + err);
      exit(1);
    }
    createTable(pMakerDB, ProjectsModel);
    createTable(pMakerDB, PhotosModel);
    // createTable(pMakerDB, FoldersModel);
    // createTable(pMakerDB, TechTagsModel);
    // createTable(pMakerDB, ProjectTechTagsModel);
  });
}

// Create a table with a give model.
// See models.js for SQL to create tables
function createTable(database, table_model) {
  database.exec(table_model, (error) => {
    if (error) {
      console.log(error);
    }
    console.log(table_model.split("(")[0]);
  });
}

module.exports = db;

const db = require("../db/db.js");

const getProjects = (req, res) => {
    
  db.select_projects((error, results) => {
    if (error) {
      console.error(error);
    }
    res.json({
      data: results,
    });
  });
};

module.exports = {
    getProjects,
}
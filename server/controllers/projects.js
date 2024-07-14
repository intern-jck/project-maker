const {db} = require("../db/db.js");

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

const createProject = (req, res) => {
  console.log(`project: ${req.body}`);

  const project = req.body;
  const defaultDate = new Date().toISOString().split("T")[0];


  for (let key in project) {
    console.log(key, project[key])
  }

  // res.json({
  //   msg: "created project",
  // });

  const sql = `
    INSERT INTO projects (
      folder_id,
      slug,
      name,
      url,
      client,
      client_url,
      start_date,
      end_date,
      short,
      description
      )
    VALUES (
      0,
      'default_slug',
      'default_name',
      'default_url',
      'default_client',
      'default_client_url',
      '${defaultDate}',
      '${defaultDate}',
      'default_short',
      'default_description'
      );`;

      return db.exec(sql, (error) => {
        if (error) {
          console.log(`create_project error: ${error}`);
          res.json({
            error: error
          });
        }
        res.json({
          msg: 'created proect'
        });
      });

  // db.create_project((error, results) => {
  //   if (error) {
  //     console.error(error);
  //     res.json({
  //       msg: `create_project error ${error}`,
  //     });
  //   }
  //   res.json({
  //     data: "success",
  //   });
  // });
};

module.exports = {
  getProjects,
  createProject,
};

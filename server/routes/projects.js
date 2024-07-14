const express = require("express");
const router = express.Router();

const {
  selectProjects,
  selectProject,
  createProject,
} = require("../db/dbProject.js");

// const { getProjects, createProject } = require("../controllers/projects.js");

// router.get("/", getProjects);
// router.post("/", createProject);

// Get all projects
router.get("/", async (req, res, next) => {
  try {
    const projects = await selectProjects();

    res.json({
      data: projects,
    });
  } catch (error) {
    next(error);
  }
});

// Get a project by id
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  console.log(id)

  try {
    const project = await selectProject(id);

    res.json({
      data: project,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const data = req.body;
  console.log(data);

  try {
    const result = await createProject(data);

    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

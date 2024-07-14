const express = require("express");
const router = express.Router();

const {
  selectProjects,
  selectProject,
  createProject,
  updateProject,
} = require("../db/dbProject.js");

// const { getProjects, createProject } = require("../controllers/projects.js");

// router.get("/", getProjects);
// router.post("/", createProject);

// Get all projects
router.get("/", async (req, res, next) => {
  try {
    const result = await selectProjects();

    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

// Get a project by id
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  console.log(id);

  try {
    const result = await selectProject(id);

    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

// Create a new project
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

// Update a project
router.put("/:id", async (req, res, next) => {
  const data = req.body;

  try {
    const result = await updateProject(data);

    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

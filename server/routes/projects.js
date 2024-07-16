const express = require("express");
const router = express.Router();

const {
  selectProjects,
  selectProject,
  createProject,
  updateProject,
  deleteProject,
} = require("../db/dbProjects.js");

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

// Update a project by id
router.put("/:id", async (req, res, next) => {
  const data = req.body;
  try {
    const result = await updateProject(data.project);

    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

// Delete a project by id
router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  console.log('delete route: ', id)

  try {
    const result = await deleteProject(id);

    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

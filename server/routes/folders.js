const express = require("express");
const router = express.Router();

const {
  insertFolder,
  selectFolders,
  selectFolder,
  deleteFolder,
} = require("../db/dbFolders.js");

// Create a new folder
router.post("/", async (req, res, next) => {
  const data = req.body;
  console.log(data)
  try {
    const result = await insertFolder(data);
    console.log(result === true ? "created folder" : "COULD NOT CREATE FOLDER!")

    res.json({
      data: true,
    });
  } catch (error) {
    next(error);
  }
});

// Get all folders
router.get("/", async (req, res, next) => {
  try {
    const result = await selectFolders();

    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

// Get a folder by id
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const result = await selectFolder(id);

    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

// Update a folder by id
router.put("/:id", async (req, res, next) => {
  const data = req.body;
  try {
    const result = await updateFolder(data.project);

    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

// Delete a folder by id
router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const result = await deleteFolder(id);

    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

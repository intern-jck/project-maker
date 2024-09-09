const express = require("express");
const router = express.Router();

const {
    selectProjectTags,
    insertProjectTag,
    updateProjectTag,
    deleteProjectTag,
} = require("../db/dbProjectTags.js");

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const result = await selectProjectTags(id);

    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const data = req.body;

  try {
    const result = await insertProjectTag(data);

    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  const data = req.body;

  try {
    const result = await updateProjectTag(data);

    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const result = await deleteProjectTag(id);

    res.json({
      data: result,
    });
  } catch (error) {
    s;
    next(error);
  }
});

module.exports = router;

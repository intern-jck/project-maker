const express = require("express");
const router = express.Router();

const {
  selectTags,
  insertTag,
  updateTag,
  deleteTag,
} = require("../db/dbTags.js");

router.get("/", async (req, res, next) => {
  try {
    const result = await selectTags();

    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const result = await selectTags(id);

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
    const result = await insertTag(data);

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
    const result = await updateTag(data);

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
    const result = await deleteTag(id);

    res.json({
      data: result,
    });
  } catch (error) {
    s;
    next(error);
  }
});

module.exports = router;

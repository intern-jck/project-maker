const express = require("express");
const router = express.Router();

const {
  selectProjectRepos,
  insertRepo,
  updateRepo,
  deleteRepo,
} = require("../db/dbRepos.js");

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  console.log(`GET /repos/${id}`)

  try {
    const result = await selectProjectRepos(id);

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
    const result = await insertRepo(data);

    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const result = await updateRepo(data);

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
    const result = await deleteRepo(id);

    res.json({
      data: result,
    });
  } catch (error) {
    s;
    next(error);
  }
});

module.exports = router;

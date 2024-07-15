const express = require("express");
const router = express.Router();

const {
  selectPhotos,
  insertPhoto,
  updatePhoto,
  deletePhoto,
} = require("../db/dbPhotos.js");

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const result = await selectPhotos(id);

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
    const result = await insertPhoto(data);

    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const result = await updatePhoto(id);

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
    const result = await deletePhoto();

    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

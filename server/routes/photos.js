const express = require("express");
const router = express.Router();

const {
  selectPhotos,
  selectProjectPhotos,
  insertPhoto,
  updatePhoto,
  deletePhoto,
} = require("../db/dbPhotos.js");

router.get("/", async (req, res, next) => {
  const id = req.params.id;

  try {
    const result = await selectPhotos();

    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:photo_project_id", async (req, res, next) => {
  const photo_project_id = req.params.photo_project_id;

  try {
    const result = await selectProjectPhotos(photo_project_id);

    res.json({
      project: result,
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
  const photos = req.body;

  try {
    const result = await updatePhoto(photos);
    res.json({
      data: result,
    });
    console.log('saved: ', result)
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const result = await deletePhoto(id);

    res.json({
      data: result,
    });
  } catch (error) {
    s;
    next(error);
  }
});

module.exports = router;

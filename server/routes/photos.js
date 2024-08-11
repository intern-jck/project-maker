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

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const result = await selectProjectPhotos(id);

    res.json({
      project: result,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/:id", async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const result = await insertPhoto(id, data);

    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  console.log("saving photos");
  const id = req.params.id;
  const photos = req.body;

  // console.log("save photos: ", id, photos);

  // res.json({
  //   data: "ok"
  // });

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

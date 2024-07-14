const express = require("express");
const router = express.Router();

const { selectProjects } = require("../db/dbProject.js");

// const { getProjects, createProject } = require("../controllers/projects.js");

// router.get("/", getProjects);
// router.post("/", createProject);

router.get("/", async (req, res, next) => {
    try {
        const projects = await selectProjects();
        res.json({
            data: projects,
        });

    } catch(error) {
        next(error);
    }
});

module.exports = router;

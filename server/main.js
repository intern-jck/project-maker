const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = require("./db/db.js");

const PORT = 8000;

const indexRoute = require("./routes/index.js");
const foldersRoutes = require("./routes/folders.js");
const photosRoutes = require("./routes/photos.js");
const projectsRoutes = require("./routes/projects.js");
const projectTagsRoutes = require("./routes/projectTags.js");
const reposRoutes = require("./routes/repos.js");
const tagsRoutes = require("./routes/tags.js");

app.use("/", indexRoute);
app.use("/folders", foldersRoutes);
app.use("/photos", photosRoutes);
app.use("/projects", projectsRoutes);
app.use("/project-tags", projectTagsRoutes);
app.use("/repos", reposRoutes);
app.use("/tags", tagsRoutes);

app.listen(PORT, () => {
  console.log(`Project Maker Server @ http://127.0.0.1:${PORT}`);
});

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const PORT = 3000;

const indexRoute = require("./routes/index.js");
const projectsRoutes = require("./routes/projects.js");
const photosRoutes = require("./routes/photos.js");
const reposRoutes = require("./routes/repos.js");
const projectTagsRoutes = require("./routes/projectTags.js");
const tagsRoutes = require("./routes/tags.js");

const db = require("./db/db.js");

app.use("/", indexRoute);
app.use("/projects", projectsRoutes);
app.use("/photos", photosRoutes);
app.use("/repos", reposRoutes);
app.use("/project-tags", projectTagsRoutes);
app.use("/tags", tagsRoutes);

app.listen(PORT, () => {
  console.log(`Project Maker Server @ http://127.0.0.1:${PORT}`);
});

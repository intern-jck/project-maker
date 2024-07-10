const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const indexRoute = require("./routes/index.js");
const projectsRoutes = require("./routes/projects.js");
// const db = require("./db/db.js");

app.use("/", indexRoute);
app.use("/projects", projectsRoutes);

app.listen(3000, () => {
  console.log(`P Maker App Listening @ http://127.0.0.1:${3000}`);
});

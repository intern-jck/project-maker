const express = require("express");
const app = express();
const cors = require("cors");

const indexRoute = require("./routes/index.js");

app.use(cors());
app.use(express.json());

const PORT = 3000;

/**
 * INDEX ROUTE
 */

app.use("/", indexRoute);

app.listen(PORT, () => {
  console.log(`P Maker App Listening @ http://127.0.0.1:${PORT}`);
});

const express = require("express");
const now = require("performance-now");

const app = express();
const port = 4000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port} 🚀`);
});

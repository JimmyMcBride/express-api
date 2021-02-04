const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello, world!",
    age: 20,
  });
});

app.get("/small-object", (req, res) => {
  res.json({
    name: "Grame",
    age: 20,
  });
});

app.get("/loop", (req, res) => {
  // Time: 286 ms - Size: 248 B
  let count = 0;
  const max = 1000;
  for (var i = 0; i < max; i++) {
    count += 1;
  }
  res.json({
    count,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port} 🚀`);
});

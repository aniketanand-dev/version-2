const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // res.send("Version 1");
  // res.send(undefinedVariable);
  res.send("Version 2 fixed");
});

app.listen(3000, () => console.log("Server running"));

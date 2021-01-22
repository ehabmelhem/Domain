const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
app.use(express.static("public"));

app.get(port, function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
const express = require("express");
const app = express();
app.use(express.static("public"));

const port = process.env.PORT || 3000;

app.get(port, function (req, res) {
  res.send("Hello World");
});

app.listen(3000);

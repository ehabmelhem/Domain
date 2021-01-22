const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
  try {
    fs.readFile("./index.html", "utf8", (err, data) => {
      if (err) throw err;

      res.send(`${data}`);
    });
  } catch (err) {
    console.log(err);
    res.send("<p>no such file</p>");
  } finally {
    console.log("cont");
  }
});
app.get("/about", (req, res) => {
  res.send(
    '<h2 style="font-family:cursive;color:purple; background:pink">about</h2>'
  );
});

let port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("listening", port);
});

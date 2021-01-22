const express = require("express");
const app = express();
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.json());

const users = [
  { name: "Kilani", password: "222222222" },
  { name: "Yara", password: "333333333" },
  { name: "Ihab", password: "444444" },
];

//routes
app.get("/get-users", (req, res) => {
  res.send(users);
});

app.get("/get-password", (req, res) => {
  const { name } = req.query;

  console.log(req.query);

  let usr = users.find((user) => user.name === name);
  console.log(usr);
  res.send({ password: usr.password });
});

app.post("/login", (req, res) => {
  console.log(req.body); //get the data
  const { name, password } = req.body;

  users.push({ name, password });

  res.send({ ok: true });
});

const port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log("listening", port);
});

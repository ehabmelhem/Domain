const express = require("express");
const app = express();

app.use(express.static("public"));

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
app.get("/get-adduser", (req, res) => {
  const { user, pass } = req.query;
  console.log(user, pass);
});

const port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log("listening", port);
});

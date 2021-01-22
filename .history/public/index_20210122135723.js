// const { func } = require("prop-types");

document.querySelector("h1").style.background = "yellow";

function getUsers() {
  console.log("get users");

  fetch("/get-users")
    .then((r) => r.json())
    .then((users) => {
      console.log("then");
      renderUsers(users);
    });
  console.log("after fetch");
}

function addUser() {
  const user = document.getElementById("user");
  const pass = document.getElementById("pass");
  fetch(`/get-adduser?user=${user}&pass=${pass}`)
    .then((r) => r.json())
    .then((users) => {
      console.log(users);
    });
}

function getPassword(name) {
  console.log("get password", name);

  fetch(`/get-password?name=${name}&city=arara`)
    .then((r) => r.json())
    .then((pass) => {
      console.log(pass.password);
    });
  console.log("after fetch");
}

function renderUsers(users) {
  const root = document.querySelector("#root");
  let html = "";
  users.forEach((user) => {
    html += `<p onclick="getPassword('${user.name}')">Name: ${user.name}</p>`;
  });

  root.innerHTML = html;
}

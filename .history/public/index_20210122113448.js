document.querySelector("h1").style.background = "yellow";
const root = document.querySelector("#root");

function getUsers(e) {
  console.log("get users");

  fetch("/get-users")
    .then((r) => r.json())
    .then((data) => {
      console.log("then");
      renderUsers(data);
    });
  console.log("after fetch");
}

function renderUsers(users) {
  let html = "";
  users.forEach((user) => {
    html += `<p>Name: ${user.name}</p>`;
  });

  root.innerHTML = html;
}

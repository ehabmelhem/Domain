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

function getPassword(name) {
  console.log("get password", name);

  fetch(`/get-password?name=${name}&city=arara`)
    .then((r) => r.json())
    .then((pass) => {
      console.log(pass.password);
    });
  console.log("after fetch");
}

function handleSubmit(e) {
  e.preventDefault();

  let { name, password } = e.target.elements;

  name = name.value;
  password = password.value;
  console.log(name, password);

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, password }),
  })
    .then((r) => r.json())
    .then((data) => {
      var h1 = document.createElement("h1");
      h1.id = "h1";
      document.getElementById("root").appendChild(h1);
      console.log(localStorage.getItem("add"));
      console.log(data.index);
      if (localStorage.getItem("add") !== "success") {
        if (data.index !== -1) {
          var h1 = document.createElement("h1");
          h1.innerText = data.userName + " " + data.userPass;
          //   localStorage.setItem("add", "success");
        } else {
          h1.innerText = data.messeg;
        }
      } else {
        h1.innerText = "you have sign in";
        localStorage.setItem("add", "notgood");
      }
    });
}

function renderUsers(users) {
  const root = document.querySelector("#root");
  let html = "";
  users.forEach((user) => {
    html += `<p onclick="getPassword('${user.userName}')">Name: ${user.userPass}</p>`;
  });

  root.innerHTML = html;
}

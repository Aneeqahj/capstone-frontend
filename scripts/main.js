let login_form = document.querySelector(".login-form");

if (login_form != null) {
  login_form.addEventListener("submit", (e) => {
    e.preventDefault();

    let user_details = {
      username: document.querySelector(".username").value,
      password: document.querySelector(".password").value,
    };

    console.log(user_details);

    fetch("https://capstone-only-books.herokuapp.com/user-login/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user_details),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data["status_code"] == 201) {
          console.log(data);
          let user = data.user_info;
          localStorage.setItem("user", JSON.stringify(user));

          if (user[5] == "true") {
            console.log("admin");
            window.location.href = "./admin.html";
          } else {
            window.location.href = "index.html";
          }
        } else {
          alert("Username and Password does not match. Try registering first");
        }
      });
  });
}

function get_users() {
  fetch("https://capstone-only-books.herokuapp.com/get-users/")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

get_users();

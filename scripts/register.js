let reg_form = document.querySelector(".register-form");
if (reg_form != null) {
    reg_form.addEventListener("submit", (e) => {
      //  PREVENT THE DEFAULT ACTION OF THE FORM
      e.preventDefault();
  
      //  CREATE AN OBJECT CONTAINING ALL THE INPUTS VALUES
      let new_user = {
        full_name: document.querySelector("#name").value,
        username: document.querySelector("#username").value,
        email_address: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
      };
  
      console.log(new_user);
  
      fetch("https://capstone-only-books.herokuapp.com/registration/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(new_user),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
  
          let user = data.user;
          localStorage.setItem("user", JSON.stringify(user));
  
          // window.location.href = "index.html";
        });
    });
  }
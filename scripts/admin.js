// Delete function

function deleteBook(index) {
  console.log(index);
  let delConfirm = confirm("Are you sure you want to delete this product?");
  if (delConfirm) {
    let token = localStorage.getItem("jwt_token");

    console.log(token);
    fetch(`https://capstone-only-books.herokuapp.com/delete_book/${index}/`, {
      headers: {
        Authorization: `jwt ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    getBooks();
  }
}

function getBooks() {
  fetch("https://capstone-only-books.herokuapp.com/viewing/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      let books = data.data;

      let bookContainer = document.querySelector(".book-container");

      bookContainer.innerHTML = "";

      books.forEach((book) => (bookContainer.innerHTML += renderBook(book)));
    });
}

//  getBooks();

function editBooks(id) {
  localStorage.setItem("to edit", JSON.stringify(id));

  window.location.href = "editbooks.html";
}

let editForm = document.querySelector(".edit-form");
let forms = document.querySelectorAll(".form");

// Edit function
if (editForm != null) {
  editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    editBooks();
  });
  function editBooks() {
    let id = document.querySelector("#book_id");

    let item = {
      name: document.querySelector("#name").value,
      price: document.querySelector("#price").value,
      format: document.querySelector("#format").value,
      synopsis: document.querySelector("#synopsis").value,
    };
    console.log(id);

    console.log(item);
    fetch(`https://capstone-only-books.herokuapp.com/update/${id}/`, {
      method: "PUT",
      headers: {
        Authorization:
          "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjkyOTI1MjYsImlhdCI6MTYyOTIwNjEyNiwibmJmIjoxNjI5MjA2MTI2LCJpZGVudGl0eSI6OX0.-G3K7K_Q2X0QTdP43l9yx8VCCqi52ObfOpu_f4vSoTg",
      },
      body: JSON.stringify(item4),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}
function getBooks() {
  fetch("https://capstone-only-books.herokuapp.com/viewing/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      let books = data.data;

      let bookContainer = document.querySelector(".book-container");

      bookContainer.innerHTML = "";

      books.forEach((book) => (bookContainer.innerHTML += renderBook(book)));
    });
}

getBooks();

function renderBook(book) {
  return `
    <div class="images"> 
        <img class="image" src="./images/non-fic.jpg" alt="non-fic"><h4>${book.name}</h4>
        <h4>${book.price}</h4>
        <h4>${book.format}</h4>
        <button onclick="addToCart(${book.book_id})">Add to cart</button>
        <button onclick="deleteBook(${book.book_id})">Delete</button>

    </div>
    `;
}

// Delete User
function getUser() {
  let container = document.querySelector(".users");
  let current_user = JSON.parse(localStorage.getItem("user"));

  console.log(current_user);

  container.innerHTML = `
    
    <p class="user">user ID: ${current_user[0]}</p>
    <p class="fullname">Full Name: ${current_user[1]}</p>
    <p class="username">Username: ${current_user[2]}</p>
    <p class="email">Email: ${current_user[3]}</p>
    <p class="password">Password: ${current_user[4]}</p>
    <button onclick="removeUser(${current_user[0]})">Delete</button>
`;
}

function removeUser(id) {
  fetch(`https://capstone-only-books.herokuapp.com/delete_user/${id}/`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.clear();
      window.location.href = "./Registration.html";
    });
}

getUser();

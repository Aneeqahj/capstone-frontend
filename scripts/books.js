//  For CRUD login with username: admin1, password: 12345

function getBooks() {
  fetch("https://capstone-only-books.herokuapp.com/viewing/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      let books = data.data;

      let horrorContainer = document.querySelector(".horror .book-container");
      console.log(horrorContainer);
      let thrillerContainer = document.querySelector(
        ".thriller .book-container"
      );
      let romanceContainer = document.querySelector(".romance .book-container");
      let nonFictionContainer = document.querySelector(
        ".non-fiction .book-container"
      );

      let horror_books = books.filter((book) => book.genre == "Horror");
      let thriller_books = books.filter((book) => book.genre == "Thriller");
      let romance_books = books.filter((book) => book.genre == "Romance");
      let nonFiction_books = books.filter(
        (book) => book.genre == "Non-fiction"
      );

      console.log(romance_books);

      horror_books.forEach(
        (book) => (horrorContainer.innerHTML += renderBook(book))
      );
      thriller_books.forEach(
        (book) => (thrillerContainer.innerHTML += renderBook(book))
      );
      romance_books.forEach(
        (book) => (romanceContainer.innerHTML += renderBook(book))
      );
      nonFiction_books.forEach(
        (book) => (nonFictionContainer.innerHTML += renderBook(book))
      );
    });
}

getBooks();

function renderBook(book) {
  return `
      <div class="images"> 
          <img class="image" src="${book.image_url}" alt="non-fic"><h4>${book.name}</h4>
          <h4>${book.price}</h4>
          <h4>${book.format}</h4>
          <button class="noselect" onclick="addToCart(${book.book_id})">Add to cart</button>
          <button class="noselect" onclick="showModal(${book.book_id})">View</button>
      </div>

    `;
}

// Modal

function toggleModal() {
  document.querySelector(".modal").classList.toggle("active");
}

function showModal(book_id) {
  toggleModal();

  fetch("https://capstone-only-books.herokuapp.com/view-one/" + book_id + "/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      let book = data.data;
      let modal = document.querySelector(".modal");

      modal.innerHTML = "";
      modal.innerHTML = renderModal(book);
    });
}

function renderModal(book) {
  console.log(book);
  return `
  <div class="container">
    <button onclick="toggleModal()" class="noselect">X</button>
    <div class="image-container">
        <img src="${book.image_url}" alt="romance">
    </div>
        <div class="info">
            <h5>${book.name}</h5>
            <div class="synopsis">
            <p>${book.synopsis}
            </p>
        </div>
      <div class="user-div"><h4 class="user-review">Reviews</h4>
          <p>This is a review. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsam nulla mollitia aut soluta non eveniet enim ab dolor doloribus omnis, odio fugiat repellendus quibusdam obcaecati est vel earum quia!</p>
      </div>
        
    </div>
</div>
  `;
}

// ADD TO CART
function addToCart(book_id) {
  fetch("https://capstone-only-books.herokuapp.com/viewing/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      let books = data.data;

      let book = books.filter((book) => book.book_id == book_id);
      let cart_items = JSON.parse(localStorage.getItem("cart"));
      console.log(book);

      if (cart_items == null) {
        cart_items = [];
      }

      cart_items.push(book);
      localStorage.setItem("cart", JSON.stringify(cart_items));
    });
}

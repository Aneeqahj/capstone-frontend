//  For CRUD login with username: admin1, password: 12345

function getCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.querySelector(".book-container");

  console.log(cart);

  container.innerHTML = "";

  cart.forEach((item) => {
    console.log(item[0]);
    let book = item[0];
    //   let detail = item[0];

    container.innerHTML += `
        <div class="book-container">
        <div class="images"> <img class="image" src="${book.image_url}" alt="horror">
        <h4 class="name">${book.name}</h4>
        <h4 class="price">${book.price}</h4>
        <h4 class="format">${book.format}</h4>
        <button onclick="removeFromCart(${book.book_id})" class="noselect">Remove</button>

        </div>
      `;
  });
}

function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let update = cart.filter((item) => item[0].book_id != id);

  localStorage.setItem("cart", JSON.stringify(update));

  getCart();
  getTotal();
}

getCart();

function getTotal() {
  let total = 0;
  let cart = JSON.parse(localStorage.getItem("cart"));

  cart.forEach(
    // (item) => console.log(item[0].price))
    (item) => (total += parseInt(item[0].price))
  );

  document.querySelector(".total").innerHTML = "Your total is: R" + total;
}



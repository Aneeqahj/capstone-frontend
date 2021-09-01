function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let container = document.querySelector(".book-container");
  
    console.log(cart);
  
    container.innerHTML = "";
  
    cart.forEach((item) => {
      console.log(item);
    //   let detail = item[0];
  
      container.innerHTML += `
        <div class="book-container">
        <div class="images"> <img class="image" src="./images/horror.jpg" alt="horror">
        <h4 class="name">The Ice Princess</h4>
        <h4 class="price">200</h4>
        <h4 class="format">Paperback</h4>
        <button class="button">Add to cart</button></div>
        </div>
      `;
    });
  }
  
  function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let updatedCart = cart.filter((item) => item[0][0] != id);
  
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  
    getCart();
    getTotal();
  }
  
//   getCart();
  
  function getTotal() {
    let total = 0;
    let cart = JSON.parse(localStorage.getItem("cart"));
  
    cart.forEach(
      (item) => (total += parseInt(item[0][2].substring(1, item[0][2].length)))
    );
  
    document.querySelector(".total").innerHTML = "Your total is: R" + total;
  }


function addToCart(id) {
    fetch("https://capstone-only-books.herokuapp.com/view/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        let books = data.data;
  
        let book = books.filter((book) => book[0] == id);
        let cart_items = JSON.parse(localStorage.getItem("cart"));
        console.log(book);
  
        if (cart_items == null) {
          cart_items = [];
        }
  
        cart_items.push(book);
        localStorage.setItem("cart", JSON.stringify(cart_items));
      });
  }
  
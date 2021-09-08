function getBooks() {
    fetch("https://capstone-only-books.herokuapp.com/viewing/")
    .then((response) => response.json())
    .then((data) => {
        console.log(data.data);
        let books = data.data;

        let bookContainer = document.querySelector(".book-container")

        bookContainer.innerHTML = "";

        books.forEach(
            (book) => (bookContainer.innerHTML += renderBook(book))
        );
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
        <button onclick="showModal(${book.book_id})">View</button>
    </div>
    `
} 


// Search Function

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// Modal
let button = document.querySelector(".exit")
button.addEventListener("click", toggleModal)


function toggleModal(){
  document.querySelector(".modal").classList.toggle("active")
}

function showModal(book_id) {
  toggleModal();

  fetch("https://capstone-only-books.herokuapp.com/view-one/" + book_id + "/")
  .then((response) => response.json())
  .then((data) => {
      console.log(data.data);
      let books = data.data;

      let modal = document.querySelector(".modal")

      modal.innerHTML = "";

      books.forEach(
          (book) => (modal.innerHTML += renderModal(book))
      );
  });
}


function renderModal(book){
  console.log(book);
  return `
  <div class="container">
  <button onclick="toggleModal()" class="exit">X</button>
  <div class="image-container">
      <img src="./images/romance.jpg" alt="romance">
  </div>
  <div class="info">
      <h5>${book.name}</h5>
      <div class="synopsis">
      <p>${book.synopsis}
      </p>
      <div class="user-div"><h4 class="user-review">Reviews</h4>
          <p>This is a review. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsam nulla mollitia aut soluta non eveniet enim ab dolor doloribus omnis, odio fugiat repellendus quibusdam obcaecati est vel earum quia!</p>
      </div>
      </div>
      <div class="review"><form>
          <input type="text" placeholder="Leave a review">
          <button class="submit">Submit</button></div>
      </form>
  </div>
</div>
  `
}
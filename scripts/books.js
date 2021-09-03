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
        <button>View</button>
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

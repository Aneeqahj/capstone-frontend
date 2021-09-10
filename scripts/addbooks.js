//  For CRUD login with username: admin1, password: 12345

let addForm = document.querySelector(".add-form");

// function addBook() {
if (addForm != null) {
  addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // CONVERT IMAGE FILE TO BASE24 STRING
    let newItem = {
      image_url: document.querySelector("#image_url").value,
      name: document.querySelector("#name").value,
      price: document.querySelector("#price").value,
      format: document.querySelector("#format").value,
      genre: document.querySelector("#genre").value,
      synopsis: document.querySelector("#synopsis").value,
    };

    console.log(newItem);

    fetch("https://capstone-only-books.herokuapp.com/adding/", {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.href = "books.html";
      });
  });
}
// }

// CREATES A PRODUCT ==>> Brent's Code
// function addBook() {
//   const image = document.querySelector(".addImage").src;
//   const name = document.querySelector("#name").value;
//   const description = document.querySelector("#description").value;
//   const price = document.querySelector("#price").value;

//   fetch("https://ecommerce-final-eomp.herokuapp.com/product/", {
//     method: "POST",
//     body: JSON.stringify({
//       image,
//       name,
//       description,
//       price,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       console.log(res);

//       if (res.status_code == 201) {
//         window.location.reload();
//       }
//     });
// }

// CODE FOR CLOUDINARY
// ALLOWS ADMIN TO ADD IMAGE FROM THEIR DEVICE INSTEAD OF IMAGE ADDRESS
// function previewFile() {
//   const image = document.querySelector(".addImage");
//   const file = document.querySelector("#image").files[0];
//   const reader = new FileReader();

//   reader.addEventListener(
//     "load",
//     function () {
//       // CONVERT IMAGE FILE TO BASE24 STRING
//       image.src = reader.result;
//     },
//     false
//   );

//   if (file) {
//     reader.readAsDataURL(file);
//   }
// }
// document.querySelector("#image").addEventListener("change", previewFile);

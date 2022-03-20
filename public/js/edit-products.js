async function editFormHandler(event) {
  event.preventDefault();

  //create references to product info on handlebars
  const name = document.querySelector('input[name="products-name"]').value;
  const price = document.querySelector('input[name="price"]').value;
  const stock = document.querySelector('input[name="stock"]').value;
  const storeId = document.querySelector('input[name="store_id"]').value;


  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];


  //apply changes to data using submitted input
  const response = await fetch(`/api/products/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      id,
      name,
      price,
      stock,
      storeId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  //render page if input is good or give message to user if not good
  if (response.ok) {
    document.location.replace("/products/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-products-form")
  .addEventListener("submit", editFormHandler);

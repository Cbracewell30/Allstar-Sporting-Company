async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  //deletes data using product id
  const response = await fetch(`/api/products/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  //render page if input is good or give message to user if not good
  if (response.ok) {
    document.location.replace('/products/');
  } else {
    alert(response.statusText);
  }

}

document.querySelector('.delete-products-btn').addEventListener('click', deleteFormHandler);
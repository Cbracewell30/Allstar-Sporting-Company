async function newFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[name="products-name"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const stock = document.querySelector('input[name="stock"]').value;
    const storeId = document.querySelector('input[name="store_id"]').value;
    // const filename = document.querySelector('input[name="filename"]').value;
    // const description = document.querySelector('input[name="description"]').value;
  
    console.log(name, price, stock, storeId);

    const response = await fetch(`/api/products/`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        price,
        stock,
        storeId
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/api/products');
    } else {
      alert(response.statusText);
    }
  };
  
document.querySelector('#new-products').addEventListener('submit', newFormHandler);
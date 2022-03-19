async function newFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('#products-name').value.trim();
    const price = document.querySelector('input[name="price"]').value;
    const stock = document.querySelector('input[name="stock"]').value;
    const store_id = document.querySelector('input[name="store_id"]').value;
    const filename = document.querySelector('input[name="filename"]').value;
    const description = document.querySelector('input[name="description"]').value;
  
    console.log(name, price, stock, store_id);

    const response = await fetch(`/api/products/`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        price,
        stock,
        store_id,
        filename,
        description
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (!response.ok) {
    //   document.location.replace('/api/products');
    // } else {
      alert(response.statusText);
    }
  };
  
document.querySelector('#new-products').addEventListener('submit', newFormHandler);
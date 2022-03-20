const signupFormHandler = async (event) => {
  event.preventDefault();

  //create references to user properties
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const store_id = document.querySelector('#store-signup').value;

  //signup functionality
  if (name && email && password && store_id) {
    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, store_id }),
      headers: { 'Content-Type': 'application/json' },

    });

    //render page if input is good or give message to user if not good
    if (response.ok) {
      document.location.replace('/products/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
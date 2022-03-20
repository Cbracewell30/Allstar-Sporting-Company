
async function loginFormHandler(event) {
  event.preventDefault();

  //references to login info
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  //login functionality
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    //render page if input is good or give message to user if not good
    if (response.ok) {
      document.location.replace('/products/');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
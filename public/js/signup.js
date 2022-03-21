const signupFormHandler = async (event) => {
  event.preventDefault();

  //create references to entered user values
  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const store_id = document.querySelector("#store-signup").value;

  //checks to see if all values are supplied, if yes send the data to the users post route.
  if (name && email && password )  {
    const response = await fetch("/api/users/", {
      method: "POST",
      body: JSON.stringify({ name, email, password, }),
      headers: { "Content-Type": "application/json" },
    });

    //render page if input is good or give message to user if not good
    if (response.ok) {
      document.location.replace("/products/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

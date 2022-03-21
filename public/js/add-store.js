async function newStoreFormHandler(event) {
    event.preventDefault();
    console.log('hello');
    //create references to product info on handlebars
    const store_name = document.querySelector('input[name="store-name"]').value;
    const store_location = document.querySelector('input[name="store-location"]').value;
  
    console.log(store_location, store_name);
//add store product using submitted data
if (store_name && store_location) {
  const response = await fetch(`/api/stores/`, {
    method: "POST",
    body: JSON.stringify({
      store_name,
      store_location,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
    //render page if input is good or give message to user if not good
      if (response.ok) {
        document.location.replace("/stores/");
      } 
    } else {
      alert(response.statusText);
      alert("You must answer all questions.");
    }
  }


  
  document
    .querySelector("#new-store")
    .addEventListener("submit", newStoreFormHandler);
  
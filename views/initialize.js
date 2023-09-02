// const initialize = async () => {
//   var requestOptions = {
//     method: "GET",
//     redirect: "follow",
//   };

//   const resp = await fetch("http://localhost:3000/contact", requestOptions);
//   // .then((response) => response.text())
//   // .then((result) => console.log(result))
//   // .catch((error) => console.log("error", error));

//   const respJson = await resp.json();
//   console.log({ respJson });
// };
fetch("http://localhost:5000/contact")
  .then((res) => {
    return res.json();
  })
  .then((resp) => {
    console.log(resp);

    resp.data.sort((a, b) => a.first_name.localeCompare(b.first_name));

    let markup = ""; // Initialize an empty string to accumulate list items

    resp.data.forEach((contact) => {
      // Append each contact to the markup string
      markup += `<li><img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"/><span>${contact.first_name} ${contact.last_name}</span></li>`;
    });

    // Set the innerHTML of the element once, after the loop
    document.getElementById("contact_rendered").innerHTML = markup;
  })
  .catch((error) => console.log(error));

fetch("http://localhost:5000/contact")
  .then((res) => {
    return res.json();
  })
  .then((resp) => {
    console.log(resp);

    resp.data.sort((a, b) => a.first_name.localeCompare(b.first_name));

    let markup = ""; // Initialize an empty string to accumulate list items

    resp.data.forEach((contact) => {
      // Append each contact to the markup string with a click event listener
      markup += `<li data-contact='${JSON.stringify(
        contact
      )}'><img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"/><span>${
        contact.first_name
      } ${contact.last_name}</span></li>`;
    });

    // Set the innerHTML of the element once, after the loop
    document.getElementById("contact_rendered").innerHTML = markup;

    // Add a click event listener to each list item
    const contactItems = document.querySelectorAll("#contact_rendered li");
    contactItems.forEach((item) => {
      item.addEventListener("click", (event) => {
        const selectedContact = JSON.parse(
          event.currentTarget.getAttribute("data-contact")
        );
        // Now 'selectedContact' contains the data of the clicked contact
        console.log(selectedContact);

        // You can display the details of the selected contact here
        const selectedContactDetails =
          document.getElementById("contact-profile");

        // Create HTML markup for the selected contact's details
        const detailsMarkup = `
          <h2>${selectedContact.first_name} ${selectedContact.last_name}</h2>
        `;

        // Set the innerHTML of the 'selected_contact_details' div
        selectedContactDetails.innerHTML = detailsMarkup;
      });
    });
  })
  .catch((error) => console.log(error));

// Function to fetch and render contacts
const fetchAndRenderContacts = async () => {
  try {
    const response = await fetch("http://localhost:5000/contact");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const resp = await response.json();
    console.log(resp);
    resp.data.sort((a, b) => a.first_name.localeCompare(b.first_name));
    const markup = generateContactMarkup(resp.data);
    renderContacts(markup);
    attachContactClickListeners();

    // Event listener for the search bar input
    const searchInput = document.getElementById("search-bar");
    searchInput.addEventListener("input", (event) => {
      const searchTerm = event.target.value.trim(); // Get the trimmed input value
      updateDisplayedContacts(searchTerm, resp.data);
    });
  } catch (error) {
    console.error(error);
  }
};

// Function to generate the HTML markup for contacts
const generateContactMarkup = (contacts) => {
  return contacts
    .map(
      (contact) => `
      <div class="contact-name">
      <li data-contact='${JSON.stringify(contact)}'>
        <span>
          <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"/>
        </span>
        <span>${contact.first_name} ${contact.last_name}</span>
        <span class="contact-phone-span">${contact.phone}</span>
        <span>
          <a class="edit-icon" href="./update-contact.html">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
        </svg>
              
          </a>
          <a class="delete-icon" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        
          </a>
        </span>
      </li>
    </div>
    
    `
    )
    .join("");
};

// Function to render the contact markup
const renderContacts = (markup) => {
  const contactRendered = document.getElementById("contact_rendered");
  contactRendered.innerHTML = markup;
};

// Function to attach click event listeners to contact items
const attachContactClickListeners = () => {
  const contactItems = document.querySelectorAll("#contact_rendered li");
  contactItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      const selectedContact = JSON.parse(
        event.currentTarget.getAttribute("data-contact")
      );
      console.log(selectedContact);
      // Display Contact Information
      // const selectedContactDetails = document.getElementById("contact-profile");
      // const detailsMarkup = `<h2>${selectedContact.first_name} ${selectedContact.last_name}</h2>`;
      // selectedContactDetails.innerHTML = detailsMarkup;
    });
  });
};

// Function to filter contacts based on search input
const filterContacts = (searchTerm, contacts) => {
  searchTerm = searchTerm.toLowerCase();
  return contacts.filter((contact) => {
    const fullName = `${contact.first_name} ${contact.last_name}`.toLowerCase();
    return fullName.includes(searchTerm) || contact.phone.includes(searchTerm);
  });
};

// Function to update the displayed contacts based on the search bar input
const updateDisplayedContacts = (searchTerm, contacts) => {
  const filteredContacts = filterContacts(searchTerm, contacts);
  const markup = generateContactMarkup(filteredContacts);
  renderContacts(markup);
  attachContactClickListeners();
};

// Fetch and render contacts when the DOM is ready
document.addEventListener("DOMContentLoaded", fetchAndRenderContacts);

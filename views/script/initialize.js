const fetchLink = "http://localhost:5000/contact";

// Function to fetch and render contacts
const fetchAndRenderContacts = async () => {
  try {
    const response = await fetch(fetchLink);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const resp = await response.json();
    console.log(resp);
    resp.data.sort((a, b) => a.first_name.localeCompare(b.first_name));
    const markup = generateContactMarkup(resp.data);
    renderContacts(markup);
    // attachContactClickListeners();
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
      <li>
        <span>
          <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"/>
        </span>
        <span>${contact.first_name} ${contact.last_name}</span>
        <span class="contact-phone-span">${contact.phone}</span>
        <span>
          <a id="edit-icon" href="./update-contact.html?id=${contact.id}" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
          </a>
          <button id="delete-icon" href="" onclick='handleDelete("${contact.id}")'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        
          </button>
        </span>
      </li>
    </div>   
    `
    )
    .join("");
};

const handleDelete = async (id) => {
  console.log({ id });

  const confirmDelete = confirm("Remove this contact?");

  if (confirmDelete) {
    response = fetch(`http://localhost:5000/contact/${id}`, {
      // Add a slash before id
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    try {
      (response) => {
        if (response.status === 200) {
          console.log("Contact deleted successfully");
          response.json;
          location.reload();
        } else {
          console.error("Failed to delete Contact");
        }
      };
    } catch (error) {
      console.error("Error", error);
    }
  } else {
    location.reload();
  }
};

// Render Contact
const renderContacts = (markup) => {
  const contactRendered = document.getElementById("contact_rendered");
  contactRendered.innerHTML = markup;
};

// Function to attach click event listeners to contact items
const attachContactClickListeners = () => {
  const contactItems = document.querySelectorAll("#contact_rendered li");
  contactItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      const selectedContact = event.getAttribute("data-contact");

      console.log(selectedContact);
    });
  });
};

// Fetch and render contacts when the DOM is ready
document.addEventListener("DOMContentLoaded", fetchAndRenderContacts);

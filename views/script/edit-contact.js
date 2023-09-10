const getSingleContact = (id) => {
  fetch(`http://localhost:5000/contact/${id}`, {
    // Add a slash before id
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 200) {
        console.log("Contact Edit successfully");
        response.json;
      } else {
        console.error("Failed to Edit Contact");
      }
    })
    .catch((error) => {
      console.error("Error", error);
    });
};

const urlParams = new URLSearchParams(window.location.search);
const contactID = urlParams.get("id");

const contactResponse = async () => {
  const response = await fetch(`http://localhost:5000/contact/${contactID}`);

  const jsonResp = await response.json();
  const getContactData = jsonResp.data;

  document.getElementById("first_name").value = getContactData.first_name;
  document.getElementById("last_name").value = getContactData.last_name;
  document.getElementById("email").value = getContactData.email;
  document.getElementById("phone").value = getContactData.phone;
};

const editData = (e) => {
  e.preventDefault();

  const first_name = document.getElementById("first_name").value;
  const last_name = document.getElementById("last_name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const contactData = JSON.stringify({ first_name, last_name, email, phone });

  fetch(`http://localhost:5000/contact/${contactID}`, {
    // Add a slash before id
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: contactData,
  })
    .then((response) => {
      if (response.status === 200) {
        console.log("Contact edit successfully");
        response.json;

        window.location.href = "./index.html";
      } else {
        console.error("Failed to edit Contact");
      }
    })
    .catch((error) => {
      console.error("Error", error);
    });
};

const saveButton = document.getElementById("edit-contact");
saveButton.addEventListener("click", editData);

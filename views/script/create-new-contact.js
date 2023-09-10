const formContact = document.querySelector(".form");

const link = "http://localhost:5000/contact";

formContact.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent the default form submission

  const formData = new FormData(formContact);
  const jsonData = Object.fromEntries(formData);

  // Convert empty fields to null
  for (const key in jsonData) {
    if (jsonData.hasOwnProperty(key) && jsonData[key] === "") {
      jsonData[key] = null;
    }
  }

  try {
    const response = await fetch(link, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Data was sent successfully", data);

      window.location.href = "./index.html";
    } else {
      alert("Cannot Create New Contact");

      console.error(
        "Failed to send data, Server returned:",
        response.statusText
      );
    }
  } catch (error) {
    console.error("Error sending data", error);
  }
});

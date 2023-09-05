// fetch()("http://localhost:5000/contact");

const formContact = document.querySelector("form");

formContact.addEventListener("submit", (e) => {
  // e.preventDefault();

  if (condition) {
  }
  const formData = new FormData(formContact);
  const jsonData = Object.fromEntries(formData);

  fetch("http://localhost:5000/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  }).then((res) => res.json);
});

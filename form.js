document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const jsonData = {};
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });
  fetch("https://api.example.com/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(jsonData)
  })
  .then(response => {
    if (response.ok) {
      return response.json(); // Parse the JSON response
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .then(data => {
    // Assuming the response contains a success message
    document.getElementById("status").innerHTML = data.message;
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("status").innerHTML = "Oops! Something went wrong.";
  });
});

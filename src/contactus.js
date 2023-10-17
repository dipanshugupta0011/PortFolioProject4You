document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var response = document.getElementById("response");
  response.innerHTML = `Thank you, ${name}! We have received your message. We will get back to you at ${email} as soon as possible.`;

  // Reset the form
  document.getElementById("contactForm").reset();

  // Redirect to the home page after 2 seconds
  setTimeout(function () {
    window.location.href = "index.html"; // Replace "home.html" with the actual URL of your home page
  }, 4000); // 2000 milliseconds = 2 seconds
});

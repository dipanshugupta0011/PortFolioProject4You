document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    var error_message = document.getElementById("error-message");

    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirm_password === ""
    ) {
      error_message.innerText = "Please fill in all required fields.";
      return false; // Prevent form submission
    }

    if (password !== confirm_password) {
      error_message.innerText = "Passwords do not match!";
      return false; // Prevent form submission
    } else {
      error_message.innerText = ""; // Clear any previous error messages
      // If all fields are filled and passwords match, redirect to a new page (e.g., success.html)
      window.location.href = "success.html";
      // Commented out the redirection for demonstration purposes
      document.getElementById("signupForm").reset(); // Reset the form after submission
      return true; // Allow form submission
    }
  });

function togglePassword() {
  var passwordInput = document.getElementById("password");
  var icon = document.querySelector(".password-toggle-icon");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
}

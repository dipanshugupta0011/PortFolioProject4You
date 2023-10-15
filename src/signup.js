function validateForm() {
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
    error_message.innerHTML = "Please fill in all required fields.";
    return false; // Prevent form submission
  }

  if (password !== confirm_password) {
    error_message.innerHTML = "Passwords do not match!";
    return false; // Prevent form submission
  } else {
    error_message.innerHTML = ""; // Clear any previous error messages
    // If all fields are filled and passwords match, redirect to a new page (e.g., success.html)
    window.location.href = "success.html";
    // Commented out the redirection for demonstration purposes
    document.getElementById("signupForm").reset(); // Reset the form after submission
    return false; // Prevent form submission
  }
}

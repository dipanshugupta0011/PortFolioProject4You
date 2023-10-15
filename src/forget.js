// Function to toggle password visibility
function togglePassword() {
  var passwordInput = document.getElementById("password");
  var icon = document.querySelector(".password-toggle-icon");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

// Event listener for the 'forgotPasswordForm' submit event
document
  .getElementById("forgotPasswordForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Regular expression to check for a valid email format
    function isEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }

    // Check if the email is valid and the password contains only numbers
    if (isEmail(email) && /^\d+$/.test(password)) {
      alert("Password reset link sent to your email!");
      // Add your desired functionality for sending the password reset link here

      // Clear the email and password fields
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    } else {
      alert(
        "Please enter a valid email address and a password containing only numbers."
      );
    }
  });

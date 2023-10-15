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

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (isEmail(username) && /^\d+$/.test(password)) {
    alert("Login successful!");
    // Redirect to the homepage here
    window.location.href = "index.html"; // Replace "home.html" with your actual homepage URL
  } else {
    if (!isEmail(username)) {
      alert("Email is incorrect. Please enter a valid email address.");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  }
});

function isEmail(email) {
  // Basic email validation
  // This is a simple pattern, not a fully comprehensive email validation
  return /\S+@\S+\.\S+/.test(email);
}

// JavaScript for handling login
function handleLogin(event) {
  event.preventDefault(); // Prevent form from submitting the default way

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Hard-coded credentials for demonstration purposes
  const correctEmail = "ranggaspfc@gmail.com";
  const correctPassword = "12345678";

  if (email === correctEmail && password === correctPassword) {
    // Redirect to the second page upon successful login
    window.location.href = "Halaman utama.html";
  } else {
    // Show an error message if login fails
    alert("Email atau password salah!");
  }
}

// JavaScript for handling signup
function handleSignup(event) {
  event.preventDefault(); // Prevent form from submitting the default way

  const fullName = document.getElementById("full-name").value;
  const nickname = document.getElementById("nickname").value;
  const newEmail = document.getElementById("new-email").value;
  const newPassword = document.getElementById("new-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // Validate that passwords match
  if (newPassword !== confirmPassword) {
    alert("Password dan konfirmasi password tidak cocok!");
    return;
  }

  // Process the signup (e.g., send data to the server)
  // ...

  // After successful signup, switch back to login form
  toggleSignupForm();
}

// Toggle between login and signup forms
function toggleSignupForm() {
  const signupContainer = document.querySelector(".signup-container");
  const signupNewContainer = document.querySelector(".signup-new-container");

  signupContainer.style.display =
    signupContainer.style.display === "none" ? "block" : "none";
  signupNewContainer.style.display =
    signupNewContainer.style.display === "none" ? "block" : "none";
}

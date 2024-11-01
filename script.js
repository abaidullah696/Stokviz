document.querySelectorAll(".dropdown").forEach((dropdown) => {
  dropdown.addEventListener("mouseenter", () => {
    const content = dropdown.querySelector(".dropdown-content");
    content.style.opacity = 0;
    content.style.display = "block";
    setTimeout(() => {
      content.style.opacity = 1;
    }, 100);
  });

  dropdown.addEventListener("mouseleave", () => {
    const content = dropdown.querySelector(".dropdown-content");
    content.style.opacity = 0;
    setTimeout(() => {
      content.style.display = "none";
    }, 300);
  });
});

// script.js

// document.getElementById("toggleButton").addEventListener("click", function () {
//   const navLinks = document.getElementById("navp2");
//   navLinks.classList.toggle("active"); // Toggle the active class to show/hide nav links
// });

// Add this to your script.js
document.getElementById("toggleButton").addEventListener("click", function () {
  this.classList.toggle("active"); // Toggle active state
  document.getElementById("navp2").classList.toggle("active"); // Show/hide nav links
});

//login register logic page js
// Handle sign-up form submission
document
  .getElementById("signup-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById("typeNameX").value;
    const email = document.getElementById("typeEmailX").value;
    const password = document.getElementById("typePasswordX").value;

    if (name && email && password) {
      // Save data to localStorage for demo
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      alert("Signup successful! Please login now.");
      window.location.href = "/pages/login.html"; // Redirect to login
    } else {
      alert("Please fill in all fields.");
    }
  });

// Handle login form submission
document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Get login data
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Check against stored data
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
      alert("Login successful!");
      window.location.href = "/index.html"; // Redirect after login
    } else {
      alert("Invalid email or password.");
    }
  });

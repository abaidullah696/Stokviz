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
// script.js
// script.js
document.getElementById("toggleButton").addEventListener("click", function () {
  const navLinks = document.getElementById("navp2");
  navLinks.classList.toggle("active"); // Toggle the active class to show/hide nav links
});

//login page js

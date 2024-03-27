const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

//to scroll to contact page
function scrollToContact() {
  var contactSection = document.getElementById("contact-page");
  contactSection.scrollIntoView({ behavior: "smooth" });
}

// Get the current year
const currentYear = new Date().getFullYear();

// Set the current year in the footer
document.getElementById(
  "copyright"
).textContent = `© ${currentYear} Tayyab-Portflio. All right reserved`;

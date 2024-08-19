// Select the dropdown and the shopping menu
const shoppingMenu = document.querySelector(".shopping-menu");
const dropdown = document.querySelector(".dropdown");

// Add event listener to the whole navbar for mouseout event
document.querySelector(".navbar").addEventListener("mouseleave", () => {
  // Hide the dropdown when the cursor leaves the navbar
  dropdown.style.display = "none";
});

// Add event listener to the shopping menu to show the dropdown on hover
shoppingMenu.addEventListener("mouseover", () => {
  dropdown.style.display = "block";
});

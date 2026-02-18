// Create button dynamically
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = '<img src="/Assests/Images/up.svg" alt="Up" width="50">';
scrollBtn.id = "scrollTopBtn";

Object.assign(scrollBtn.style, {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  display: "none",
  cursor: "pointer",
  zIndex: "1000",
  width: "50px",
  height: "50px",
  border: "none",
});

document.body.appendChild(scrollBtn);

// Show button when scrolled
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

// Scroll to top on click
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

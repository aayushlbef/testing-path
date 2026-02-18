// fetch("HTML/navigationBar.html")
//   .then(res => res.text())
//   .then(data => document.getElementById("header").innerHTML = data);

// fetch("HTML/footer.html")
//   .then(res => res.text())
//   .then(data => document.getElementById("footer").innerHTML = data);


// Determine base path dynamically
const basePath = window.location.pathname.includes("/FDD-Assignment-Team6/")
  ? "/FDD-Assignment-Team6/"
  : "/";

// Load header
fetch(`${basePath}HTML/navigationBar.html`)
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  })
  .catch(err => console.error("Header error:", err));

// Load footer
fetch(`${basePath}HTML/footer.html`)
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch(err => console.error("Footer error:", err));

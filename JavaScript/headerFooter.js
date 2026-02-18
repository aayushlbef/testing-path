// fetch("HTML/navigationBar.html")
//   .then(res => res.text())
//   .then(data => document.getElementById("header").innerHTML = data);

// fetch("HTML/footer.html")
//   .then(res => res.text())
//   .then(data => document.getElementById("footer").innerHTML = data);


// Determine path depth dynamically to find the root folder
const depth = window.location.pathname.split('/').filter(p => p !== "").length;
// If hosted on GitHub Pages (e.g., /testing-path/...), the first segment is the repo name
const isGitHubPages = window.location.pathname.includes("/testing-path/");
const rootOffset = isGitHubPages ? depth - 1 : depth;

let prefix = "";
for (let i = 0; i < rootOffset; i++) {
  prefix += "../";
}

// Load header
fetch(`${prefix}HTML/navigationBar.html`)
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  })
  .catch(err => console.error("Header error:", err));

// Load footer
fetch(`${prefix}HTML/footer.html`)
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch(err => console.error("Footer error:", err));


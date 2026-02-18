// fetch("HTML/navigationBar.html")
//   .then(res => res.text())
//   .then(data => document.getElementById("header").innerHTML = data);

// fetch("HTML/footer.html")
//   .then(res => res.text())
//   .then(data => document.getElementById("footer").innerHTML = data);


// Determine path depth dynamically to find the root folder
const pathSegments = window.location.pathname.split('/').filter(p => p !== "");
const isGitHubPages = window.location.pathname.includes("/testing-path/");

// Find the index of the root directory "Main-Assignment - PathTest" or the repo name
const rootIndicator = isGitHubPages ? "testing-path" : "Main-Assignment - PathTest";
const rootIndex = pathSegments.indexOf(rootIndicator);

let prefix = "";
if (rootIndex !== -1) {
  const depthFromRoot = pathSegments.length - 1 - rootIndex;
  // If the last segment is the root indicator itself, depth is 0
  // If we're in HTML/..., depth is 1
  // If we're in HTML/sub/..., depth is 2
  for (let i = 0; i < depthFromRoot; i++) {
    prefix += "../";
  }
} else {
  // Fallback for local files if the root indicator isn't found in pathname
  // (e.g. if the folder name is different or missing in URL)
  // Check if we are in a subdirectory of HTML
  const htmlIndex = pathSegments.indexOf("HTML");
  if (htmlIndex !== -1) {
    const depthFromHtml = pathSegments.length - 1 - htmlIndex;
    prefix = "../".repeat(depthFromHtml + 1);
  }
}

// Ensure prefix is at least an empty string
prefix = prefix || "";

function adjustLinks(container, prefix) {
  if (!prefix) return;

  // Adjust <a> hrefs
  container.querySelectorAll('a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('javascript:') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
      a.setAttribute('href', prefix + href);
    }
  });

  // Adjust <img> srcs
  container.querySelectorAll('img').forEach(img => {
    const src = img.getAttribute('src');
    if (src && !src.startsWith('http') && !src.startsWith('data:')) {
      img.setAttribute('src', prefix + src);
    }
  });

  // Adjust elements with onclick redirect
  container.querySelectorAll('[onclick*="location.href"]').forEach(el => {
    let onclick = el.getAttribute('onclick');
    onclick = onclick.replace(/(location\.href=['"])([^'"]+)(['"])/g, (match, p1, p2, p3) => {
      if (!p2.startsWith('http') && !p2.startsWith('/') && !p2.startsWith('#')) {
        return p1 + prefix + p2 + p3;
      }
      return match;
    });
    el.setAttribute('onclick', onclick);
  });
}

// Load header
fetch(`${prefix}HTML/navigationBar.html`)
  .then(res => res.text())
  .then(data => {
    const header = document.getElementById("header");
    header.innerHTML = data;
    adjustLinks(header, prefix);
  })
  .catch(err => console.error("Header error:", err));

// Load footer
fetch(`${prefix}HTML/footer.html`)
  .then(res => res.text())
  .then(data => {
    const footer = document.getElementById("footer");
    footer.innerHTML = data;
    adjustLinks(footer, prefix);
  })
  .catch(err => console.error("Footer error:", err));


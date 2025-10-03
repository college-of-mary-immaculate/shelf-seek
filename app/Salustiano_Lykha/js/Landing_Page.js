const topNavLinks = document.querySelectorAll(".nav-link");
const bottomNavLinks = document.querySelectorAll(".bottom-nav a");

function clearActive() {
  [...topNavLinks, ...bottomNavLinks].forEach(link => {
    link.classList.remove("active");

    const img = link.querySelector("img");
    if (img && link.dataset.iconDefault) {
      img.src = link.dataset.iconDefault;
    }
  });
}

function activatePage(pageName) {
  clearActive();

  [...topNavLinks, ...bottomNavLinks].forEach(link => {
    if (link.dataset.page === pageName) {
      link.classList.add("active");

      const img = link.querySelector("img");
      if (img && link.dataset.iconActive) {
        img.src = link.dataset.iconActive;
      }
    }
  });

  localStorage.setItem("activeNav", pageName);
}

[...topNavLinks, ...bottomNavLinks].forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = link.dataset.page;
    activatePage(page);
  });
});

function updateLogo() {
  const logo = document.getElementById("site-logo");
  if (!logo) return;

  if (window.innerWidth <= 768) {
    logo.src = "/img/logo2.png"; 
  } else {
    logo.src = "/img/Removal-744.png"; 
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("activeNav");
  if (saved) {
    activatePage(saved);
  }

  updateLogo();
});

window.addEventListener("resize", updateLogo);

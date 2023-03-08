"use strict";

const btnNavEl = document.querySelector(".btn-mobile-nav");
const btnNavAparence = document.querySelector(".aparence");
const bodyEl = document.querySelector("body");
const paragraphEl = document.querySelector("html");
const linkEl = document.querySelector(".footer-link:link");
const headerEl = document.querySelector(".btn");
const allLinks = document.querySelectorAll("a:link");

// if (window) {
//   headerEl.classList.remove("nav-open");
// }

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

btnNavAparence.addEventListener("click", function () {
  bodyEl.classList.toggle("openNav");
});

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      e.preventDefault();
      const sectEl = document.querySelector(href);
      sectEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

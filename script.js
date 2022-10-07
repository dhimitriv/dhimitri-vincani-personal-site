"use strict";

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".something");

headerEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectEl = document.querySelector(href);
      sectEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link"))
      headerEl.classList.add("nav-open");
  });
});

// const sectionImg = document.querySelector(".img-header");

// const observer = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);
//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     root: null,
//     threshold: 0,
//     rootMargin: "-48px",
//   }
// );
// observer.observe(sectionImg);

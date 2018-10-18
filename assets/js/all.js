"use strict";
{
  let hamburger = document.querySelector(".hamburger");
  let nav = document.querySelector("header > nav");

  function handler(e) {
    e.stopPropagation();

    hamburger.classList.contains("active")
      ? hamburger.classList.remove("active")
      : hamburger.classList.add("active");

    nav.classList.contains("open")
      ? nav.classList.remove("open")
      : nav.classList.add("open");
  }

  hamburger.addEventListener("click", handler);
  document.addEventListener("click", e => {
    nav.classList.remove("open");
    hamburger.classList.remove("active");
  });
}

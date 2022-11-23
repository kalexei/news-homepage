"use strict";

const menuButton = document.querySelectorAll(".menu-button");
const navbar = document.querySelector(".navbar");
const blurOverlay = document.querySelector(".blur");

menuButton.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("open")) {
      navbar.classList.add("open");
      blurOverlay.classList.add("visible");
    } else if (btn.classList.contains("close")) {
      navbar.classList.remove("open");
      blurOverlay.classList.remove("visible");
    }
  });
});

"use strict";

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let imgs = document.querySelectorAll(".img");
  document.querySelector(".slide").appendChild(imgs[0]);
});

prev.addEventListener("click", function () {
  let imgs = document.querySelectorAll(".img");
  document.querySelector(".slide").prepend(imgs[imgs.length - 1]);
});

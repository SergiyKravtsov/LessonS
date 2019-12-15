import "./hot_wheels.css";

const btn = document.createElement("button");
console.log(btn);
btn.style.background = "red";
btn.textContent = "Cool button!";

const body = document.querySelector("body");

body.appendChild(btn);

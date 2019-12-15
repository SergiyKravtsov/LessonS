import "./trafic_lighter.css";
const redLight = document.querySelector(".redLight");
const yellowLight = document.querySelector(".yellowLight");
const greenLight = document.querySelector(".greenLight");

const startButton = document.querySelector(".btn");

const statusButton = () => {
  if (startButton.textContent === "Off") {
    startButton.textContent = "On";
    statusB = false;
    clearColor();
  } else {
    startButton.textContent = "Off";
    statusB = true;
  }
};

const iliminateRed = () => {
  if (statusB) {
    clearColor();
    redLight.style.backgroundColor = "red";
  }
};

const iliminateYellow = () => {
  if (statusB) {
    clearColor();
    yellowLight.style.backgroundColor = "yellow";
  }
};

const iliminateGreen = () => {
  if (statusB) {
    clearColor();
    greenLight.style.backgroundColor = "green";
  }
};

const clearColor = () => {
  redLight.style.backgroundColor = "black";
  yellowLight.style.backgroundColor = "black";
  greenLight.style.backgroundColor = "black";
};

redLight.onclick = iliminateRed;
yellowLight.onclick = iliminateYellow;
greenLight.onclick = iliminateGreen;
startButton.onclick = statusButton;

let statusB;

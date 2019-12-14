import "./trafic_lighter.css";

document.getElementById("redLight").onclick = iliminateRed;
document.getElementById("yellowLight").onclick = iliminateYellow;
document.getElementById("greenLight").onclick = iliminateGreen;
document.getElementById("startButton").onclick = statusButton;

let statusB;

function statusButton() {
  if (document.getElementById("startButton").textContent === "Off") {
    document.getElementById("startButton").textContent = "On";
    statusB = false;
    clearColor();
  } else {
    document.getElementById("startButton").textContent = "Off";
    statusB = true;
  }
}

function iliminateRed() {
  if (statusB === true) {
    clearColor();
    document.getElementById("redLight").style.backgroundColor = "red";
  }
}

function iliminateYellow() {
  if (statusB === true) {
    clearColor();
    document.getElementById("yellowLight").style.backgroundColor = "yellow";
  }
}

function iliminateGreen() {
  if (statusB === true) {
    clearColor();
    document.getElementById("greenLight").style.backgroundColor = "green";
  }
}

function clearColor() {
  document.getElementById("redLight").style.backgroundColor = "black";
  document.getElementById("yellowLight").style.backgroundColor = "black";
  document.getElementById("greenLight").style.backgroundColor = "black";
}

import "./trafic_lighter.css";

document.getElementById("redLight").onclick = iliminateRed;
document.getElementById("yellowLight").onclick = iliminateYellow;
document.getElementById("greenLight").onclick = iliminateGreen;

function iliminateRed() {
  clear();
  document.getElementById("redLight").style.backgroundColor = "red";
}

function iliminateYellow() {
  clear();
  document.getElementById("yellowLight").style.backgroundColor = "yellow";
}

function iliminateGreen() {
  clear();
  document.getElementById("greenLight").style.backgroundColor = "green";
}

function clear() {
  document.getElementById("redLight").style.backgroundColor = "black";
  document.getElementById("yellowLight").style.backgroundColor = "black";
  document.getElementById("greenLight").style.backgroundColor = "black";
}

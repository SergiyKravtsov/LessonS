import "./hot_wheels.css";
const carElement = document.querySelector(".car");

carElement.onclick = moveCar;

function moveCar() {
  console.log("asdasd");
  if (parseInt(carElement.style.marginLeft) < 800) {
    carElement.style.marginLeft =
      parseInt(carElement.style.marginLeft || "0px") + 40 + "px";
  } else {
    carElement.style.marginLeft = "0px";
  }
}

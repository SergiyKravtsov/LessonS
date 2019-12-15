import "./garland.css";

let count = prompt("How match garlands?");
console.log(count);

for (let i = 0; i < count; i++) {
  let garlandOne = document.createElement("div");

  garlandOne.style.width = "40px";
  garlandOne.style.height = "40px";
  garlandOne.style.backgroundColor = "#333";
  garlandOne.style.borderStyle = "solid";
  garlandOne.style.borderColor = "#d3d3d3";
  garlandOne.style.borderWidth = "5px";
  garlandOne.style.marginLeft = "10px";
  garlandOne.style.marginBottom = "10px";
  garlandOne.style.backgroundColor = "#111";
  garlandOne.style.borderRadius = "60%";

  //document.querySelector(".light").appendChild(garlandOne);

  const colorRandom = () => {
    let hexRandom = Math.floor(Math.random() * 16777215).toString(16);

    garlandOne.style.backgroundColor = "#" + hexRandom;
  };

  setInterval(colorRandom, 1000);

  document.querySelector(".light").append(garlandOne);
}

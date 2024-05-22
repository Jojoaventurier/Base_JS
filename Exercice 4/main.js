

spans = document.querySelectorAll(".span")
icons = document.querySelectorAll(".fa-brands")

spans.forEach(span => {
    span.addEventListener("click", () => {
        //console.log("clicked")
        span.classList.toggle("spanClicked")

        })
    })


let id =""
let variable = ""

const buttons = document.getElementsByTagName("span");
const playstationIcon = document.querySelector("#playstation")
const xboxIcon = document.getElementById("xbox")
const steamIcon = document.getElementById("steam")

const playsationSpan = document.querySelector("#playstationSpan")
const xboxSpan = document.getElementById("xboxSpan")
const steamSpan = document.getElementById("steamSpan")

const buttonPressed = e => {

    console.log(e.target.id)
    id = e.target.id;  // Get ID of Clicked Element

  switch (id) {

    case "playstationSpan":
    case "playstation":

        console.log("hello")
        
        break;

    case "xboxSpan":
        variable = document.getElementById(essai).classList
        secondBox.className = variable
        break;

    case "steamSpan":
        variable = document.getElementById(essai).classList
        secondBox.className = variable
        break;

    default:
        secondBox.className = "box"
        break;
    }
}

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}

console.log(spans)   
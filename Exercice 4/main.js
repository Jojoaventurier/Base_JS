let id =""
let variable = ""

const buttons = document.getElementsByTagName("span");
const playstationIcon = document.querySelector("#playstation")
const xboxIcon = document.querySelector("#xbox")
const steamIcon = document.querySelector("#steam")

const playsationSpan = document.querySelector("#playstationSpan")
const xboxSpan = document.querySelector("#xboxSpan")
const steamSpan = document.querySelector("#steamSpan")

spansAndIcons = document.querySelectorAll(".span")

console.log(spansAndIcons)



spansAndIcons.forEach(span => {
    span.addEventListener("click", () => {
        //console.log("clicked")
        span.classList.toggle("spanClicked")
        })
    })
    
/*
icons.forEach(icon => {
    icon.addEventListener("click", () => {
        icon.classList.toggle("clicked")
    })
} )
 */   



/*
const buttonPressed = e => {

    console.log(e.target.id)
    id = e.target.id;  // Get ID of Clicked Element

  switch (id) {

    case "playstationSpan":
    case "playstation":

        playstationIcon.classList.toggle("clicked")
        console.log("hello")
        
        break;

    case "xboxSpan":
       
        break;

    case "steamSpan":
        
        break;

    default:
        
        break;
    }
}

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}
*/
 
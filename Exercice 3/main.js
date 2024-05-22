

let boxes2 = document.getElementsByClassName("box");
let boxes = document.querySelectorAll(".box");
let essai = "bonjour"
let variable = "cliquée"


for (i = 0; i <= boxes.length - 1; i++) {
    //boxes[i].addEventListener("click", myFunction)
    boxes[i].setAttribute("id", `${i}`)
    boxes[i].innerHTML = i
}


boxes.forEach(box => {
    box.addEventListener("click", () => {

        box.classList.toggle("boxClicked")

       /* if( box.classList == "box") {
            box.classList.add("boxClicked")
        } else if (box.classList == "box boxClicked") {
            box.classList.remove("boxClicked")
        }*/
    })
}) 

//console.log(boxes)
//console.log(boxes2)



/*
const buttons = document.getElementsByTagName("button");
const buttonPressed = e => {
  console.log(e.target.id);  // Get ID of Clicked Element
}
for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}
*/
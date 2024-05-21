const board = document.getElementById("board");


let boxClassName = "box.className";

let boxStyle = ""
let boxBackgroundColor = ""
let boxTextColor = ""
let boxHeight = ""
let boxWidth = ""
let boxDisplay = ""
let boxFont = ""

let boxStyleArr = []

let box = document.createElement("div")
box.classList.add("box")
box.innerText = "Text"
board.appendChild(box)


boxStyle = window.getComputedStyle(box);

box.onclick = function () {
    displayBoxStyle()
}

boxClassName = box.className;

boxBackgroundColor = boxStyle.backgroundColor;
boxTextColor = boxStyle.color
boxHeight = boxStyle.height
boxWidth = boxStyle.width
boxDisplay = boxStyle.display
boxFont = boxStyle.font

boxStyleArr = [boxBackgroundColor, boxTextColor, boxHeight, boxWidth, boxDisplay, boxFont]

function displayBoxStyle() {

    alert(boxStyleArr);
}



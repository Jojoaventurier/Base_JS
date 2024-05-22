

let boxes = document.getElementsByClassName("box");



for (i = 0; i <= boxes.length; i++) {
    boxes[i].addEventListener('click', myFunction)
}

function myFunction() {
    console.log("hello")
    console.log(boxes)
}


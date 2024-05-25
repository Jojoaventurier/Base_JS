
let boxes = document.querySelectorAll(".box");

for (i = 0; i <= boxes.length - 1; i++) {
    boxes[i].setAttribute("id", `${i}`)
    boxes[i].innerHTML = i
}


boxes.forEach(box => {
    box.addEventListener("click", () => {

        box.classList.toggle("boxClicked")
    })
}) 


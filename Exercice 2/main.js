function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}



let box = document.createElement("div")
box.classList.add("box")

let colorsArr = ["blue", "red", "green", "yellow"]




for(let i = 1; i <= 4; i++) {
    let newbox = box.cloneNode()
    newbox.innerText = i;
    //newbox.classList.add(colorsArr[i - 1])
    board.appendChild(newbox)
}


function attribuerCouleurs() {

    let boxes = document.getElementsByClassName("box")
    
    for(let i = 1; i <= 4; i++) {
        boxes[i-1].classList.add(colorsArr[i - 1])
    }
  }


function changerCouleurs() {

    let boxes = document.getElementsByClassName("box")
    let randomColors = shuffle(colorsArr);

    for(let i = 1; i <= 4; i++) {

        boxes[i - 1].className = "box";

        boxes[i-1].classList.add(randomColors[i - 1]);
    }
}







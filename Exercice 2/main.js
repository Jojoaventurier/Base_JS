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

let style = []

function attribuerCouleurs() {      
    colorsArr = ["blue", "red", "green", "yellow"]  // permet de revenir au tableau de départ mélangé par shuffle()
    let boxes = document.getElementsByClassName("box")
    
    for(let i = 1; i <= 4; i++) {

        boxes[i - 1].className = "box"; // permet de réinitialiser la classe de chaque boîte (enlever .blue, .yellow etc) et revenir à sa classe initiale .box

        boxes[i - 1].classList.add(colorsArr[i - 1]) // permet de réattribuer les couleurs initiales aux boîtes

        style[i - 1] += boxes[i - 1].className
    }
    
  }


function echangerCouleurs() { // permet d'interchanger les couleurs en mélangeant les éléments du tableau "colorsArr" contenant les couleurs des 4 div

    let boxes = document.getElementsByClassName("box")
    let randomColors = shuffle(colorsArr);
    

    for(let i = 1; i <= 4; i++) {

        boxes[i - 1].className = "box";

        boxes[i-1].classList.add(randomColors[i - 1]);

        style[i - 1] += boxes[i - 1].className
    }
}


let colorsArr = ["blue", "red", "green", "yellow"] // couleurs pour les div

const board = document.getElementById("board") // récupération de la div qui contiendra nos prochaines boîtes
const secondBoard = document.getElementById("secondBoard")


let box = document.createElement("div") //creation d'une div
box.classList.add("box")    // ajout de la classe .box à cette div

let secondBox = document.createElement("div")
secondBox.classList.add("box")
secondBoard.appendChild(secondBox)


for(let i = 1; i <= 4; i++) {   // création de 4 boîtes
    let newbox = box.cloneNode()
    newbox.innerText = i;
    newbox.addEventListener("click", getColor)
    board.appendChild(newbox)  // matérialiser les 4 div créees dans la <div id="board">
}





















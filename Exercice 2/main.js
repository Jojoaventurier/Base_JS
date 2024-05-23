function shuffle(array) {    // fonction qui permet de mélanger aléatoirement les éléments d'un tableau
    var i = array.length,   // attention cette fonction mélange le tableau initial
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


// !!! les i - 1 dans les boucles sont pour avoir un affichage à partir de 1 et pas de 0, étrant donné qu'on commence les boucle avec la valeur de i = 1 !!!!



function attribuerCouleurs() {      
    colorsArr = ["blue", "red", "green", "yellow"]  // permet de revenir au tableau de départ mélangé par shuffle()
    let boxes = document.getElementsByClassName("box")
    
    for(let i = 1; i <= 4; i++) {

        boxes[i - 1].className = "box"; // permet de réinitialiser la classe de chaque boîte (enlever .blue, .yellow etc et revenir à sa classe initiale .box)

        boxes[i - 1].classList.add(colorsArr[i - 1]) // permet de réattribuer les couleurs initiales aux boîtes
    }
  }

function echangerCouleurs() { // permet d'interchanger les couleurs en mélangeant les éléments du tableau "colorsArr" contenant les couleurs des 4 div

    let boxes = document.getElementsByClassName("box")
    let randomColors = shuffle(colorsArr); // mélanger le tableau colorsArr 
    

    for(let i = 1; i <= 4; i++) {

        boxes[i - 1].className = "box"; // enlever les classes de chaque boîte et leur remettre uniquement la classe initiale box

        boxes[i-1].classList.add(randomColors[i - 1]); // attribution des couleurs à chaque div à partir du tableau mélangé par shuffle(colorsArr)
    }
}


let colorsArr = ["blue", "red", "green", "yellow"] // couleurs pour les div

const board = document.getElementById("board") // récupération de la div qui contiendra nos prochaines boîtes (pour pouvoir ensuite utiliser appendChild et matérialiser les enfants)
const secondBoard = document.getElementById("secondBoard")


let box = document.createElement("div") //creation d'une div
box.classList.add("box")    // ajout de la classe .box à cette div

let secondBox = document.createElement("div") // création de la boîte qui va changer de couleur quand on clique sur l'une des 4 autres
secondBox.classList.add("box")
secondBoard.appendChild(secondBox)


for(let i = 1; i <= 4; i++) {   // création de 4 boîtes
    let newbox = box.cloneNode() // création d'une variable newbox à laquelle on attribue la valeur d'une copie de box
    newbox.innerText = i; // insérer le numéro de la div à l'intérieur des 4 div colorées
    newbox.setAttribute("id", `${i}`)
    board.appendChild(newbox)  // matérialiser les 4 div créees dans la <div id="board">
}


let essai ="" // va contenir l'id de l'élément sur lequel on clique
let variable = "" // sera utilisée pour contenir la classList des éléments sur lesquels on clique et ensuite l'appliquer à la boîte qui doit changer de couleur

const buttons = document.getElementsByTagName("div");

const buttonPressed = e => {

    //console.log(e.target.id)
    essai = e.target.id;  // Get ID of Clicked Element
    //console.log(variable) // type= DOM Token list
  switch (essai) {

    case "1":
        variable = document.getElementById(essai).classList // on récupère la classList de l'élément sur lequel on clique
        secondBox.className = variable // on donne à la boîte qui doit changer de couleur la valeur récupérée de l'élément sur lequel on a cliqué
        break;

    case "2":
        variable = document.getElementById(essai).classList
        secondBox.className = variable
        break;

    case "3":
        variable = document.getElementById(essai).classList
        secondBox.className = variable
        break;

    case "4":
        variable = document.getElementById(essai).classList
        secondBox.className = variable
        break;

    default:
        secondBox.className = "box" // si on clique en dehors d'une boîte colorée, la boîte qui change de couleur revient à son état initial (classe .box)
        break;
    }

}

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}





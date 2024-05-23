
let alertBox = document.getElementById("alertBox")
let message = document.getElementById("message");
let messageAffiche = "";

document.getElementById("btnClose").addEventListener("click", hideAlert );

const board = document.getElementById("board"); // récupérer la div "board" qui contient notre carré

let boxClassName = ""; //Déclaration et initialisation des variables que l'on va utiliser plus tard pour afficher certains paramètres css

let boxStyle = ""
let boxBackgroundColor = ""
let boxTextColor = ""
let boxHeight = ""
let boxWidth = ""
let boxDisplay = ""
let boxFont = ""

let boxStyleArr = [] // création d'un tableau qui servira à recevoir les propriétés principales que l'on souhaitera afficher dans l'alerte

let box = document.createElement("div")  // création de la div pour l'exercice
box.classList.add("box")    // ajout de la classe .box à la div
box.innerText = "Text"  // ajout d'un texte au sein de la boîte
board.appendChild(box)  // matérialiser la boîte au sein de son conteneur


boxStyle = window.getComputedStyle(box);  // récupérer tous les attributs css de la div "box" et les attribuer à la variable boxStyle

box.addEventListener("click", showAlert)

boxClassName = box.className; // on réassigne les variables déclarées pour qu'elles contiennent la valeur des paramètres css que l'on souhaite afficher

boxBackgroundColor = boxStyle.backgroundColor; // ici on se sert de boxStyle poru accéder aux éléments récupérés par l'utilisation de la fonction window.getComputedStyle() avec box en paramètre
boxTextColor = boxStyle.color
boxHeight = boxStyle.height
boxWidth = boxStyle.width
boxDisplay = boxStyle.display
boxFont = boxStyle.font

boxStyleArr = [boxBackgroundColor, boxTextColor, boxHeight, boxWidth, boxDisplay, boxFont] // mise des valeurs des propriétés que l'on veut afficher dans le tableau vide créé précédemment pour faciliter la manipulation

messageAffiche = `Classe : .${boxClassName} <br> 
- Background color : ${boxStyleArr[0]} <br>
- Text color:  : ${boxStyleArr[1]} <br>
- Height : ${boxStyleArr[2]} <br>
- Width : ${boxStyleArr[3]} <br>
- Diplay : ${boxStyleArr[4]} <br>
- Font :  ${boxStyleArr[5]} <br> `; // mise en forme du message qui s'affiche



function showAlert() {

    alertBox.classList.remove("hide");
    message.innerHTML = messageAffiche;
}

function hideAlert() {
    
    alertBox.classList.add("hide");
    message.innerText = messageAffiche;
}



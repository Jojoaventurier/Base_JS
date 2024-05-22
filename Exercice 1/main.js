
function showAlert(message) {

    alertBox.classList.remove("hide");
     msg.innerText = message;
   }
   
   function hideAlert() {
     
     alertBox.classList.add("hide");
     msg.innerText = message;
   }


var d = document,
  alertBox = d.getElementById("alertBox"),
  message = d.getElementById("message");

// events

 d.getElementById("btnClose").addEventListener("click", hideAlert );


const board = document.getElementById("board"); // récupérer la div "board" qui contient notre carré

let boxClassName = ""; //Déclaration et initialisation des variables que l'on va utiliser plus tard pour afficher certains paramètres css

let boxStyle = ""
let boxBackgroundColor = ""
let boxTextColor = ""
let boxHeight = ""
let boxWidth = ""
let boxDisplay = ""
let boxFont = ""

let boxStyleArr = []

let box = document.createElement("div")  // création de la div pour l'exercice
box.classList.add("box")    // ajout de la classe .box à la div
box.innerText = "Text"  // ajout d'un texte au sein de la boîte
board.appendChild(box)  // matérialiser les boîtes


boxStyle = window.getComputedStyle(box);  // récupérer tous les attributs css appliqués à la div ".box"

box.onclick = function () {   // ajout de l'appel à la fonction showAlert() quand on clique sur la div
    showAlert(message);
}

boxClassName = box.className; // on réassigne les variables déclarées pour qu'elles contiennent la valeur des paramètres css que l'on souhaite afficher

boxBackgroundColor = boxStyle.backgroundColor;
boxTextColor = boxStyle.color
boxHeight = boxStyle.height
boxWidth = boxStyle.width
boxDisplay = boxStyle.display
boxFont = boxStyle.font

boxStyleArr = [boxBackgroundColor, boxTextColor, boxHeight, boxWidth, boxDisplay, boxFont] // mise des valeurs des paramètres dans un tableau pour faciliter la manipulation
message = ` ${boxClassName} + "<br>" +
"- Background color : " + ${boxStyleArr[0]} + "<br>" +
"- Text color:  : " + ${boxStyleArr[1]} + "<br>" +
"- Height : " + ${boxStyleArr[2]} + "<br>" +
"- Width : " + ${boxStyleArr[3]} + "<br>" +
"- Diplay : " + ${boxStyleArr[4]} + "<br>" +
"- Font : " + ${boxStyleArr[5]} + "<br>"`;

function displayBoxStyle() {

    alert(boxClassName + "<br>" +
        "- Background color : " + boxStyleArr[0] + "<br>" +
        "- Text color:  : " + boxStyleArr[1] + "<br>" +
        "- Height : " + boxStyleArr[2] + "<br>" +
        "- Width : " + boxStyleArr[3] + "<br>" +
        "- Diplay : " + boxStyleArr[4] + "<br>" +
        "- Font : " + boxStyleArr[5] + "<br>"
    );
}





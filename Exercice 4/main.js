
let playstationSpanClassObject = document.querySelector(".fa-playstation") //object

let xboxSpanClassObject = document.querySelector(".fa-xbox") // object
//let xboxSpanClassHTML = document.getElementsByClassName(".fa-xbox") // html collection

let steamSpanClassObject = document.querySelector(".fa-steam") // object
//let steamSpanClassHTML = document.getElementsByClassName(".fa-steam") //html collection


let marqueSpanPlay = document.querySelector(".playstation") // Node List
let marqueSpanXbox = document.querySelector(".xbox") // Node List
let marqueSpanSteam = document.querySelector(".steam") // Node List

let background = document.querySelector(".container") // object

let isActive = document.querySelector(".span").className
let isContainerActive = document.querySelector(".container").className


const buttons = document.getElementsByTagName("i");
const buttonPressed = e => {

    //console.log(e.target.className);  // Get ClassName of Clicked Element
    console.log(e.target.className)

    variable = e.target.className

    switch(e.target.className) {

        case "fa-brands fa-playstation span clicked":

            background.className = "container"
            playstationSpanClassObject.className = "fa-brands fa-playstation span"
            xboxSpanClassObject.className = "fa-brands fa-xbox span"
            steamSpanClassObject.className = "fa-brands fa-steam span"
            marqueSpanPlay.className = "marque playstation" 
            marqueSpanXbox.className = "marque xbox" 
            marqueSpanSteam.className = "marque steam"

        break;

        case "fa-brands fa-playstation span":

            background.className = "container containerClickedPlaystation"
            playstationSpanClassObject.className = "fa-brands fa-playstation span clicked"
            xboxSpanClassObject.className = "fa-brands fa-xbox span"
            steamSpanClassObject.className = "fa-brands fa-steam span"
            marqueSpanPlay.className = "playstation marqueClicked" 
            marqueSpanXbox.className = "marque xbox" 
            marqueSpanSteam.className = "marque steam"
            
        break;

        case "fa-brands fa-xbox span clicked":

            background.className = "container"
            steamSpanClassObject.className = "fa-brands fa-steam span"
            xboxSpanClassObject.className = "fa-brands fa-xbox span"
            playstationSpanClassObject.className = "fa-brands fa-playstation span"
            marqueSpanPlay.className = "marque playstation"
            marqueSpanXbox.className = "marque xbox"
            marqueSpanSteam.className = "marque steam"
        break;

        case "fa-brands fa-xbox span" : 

            background.className = "container containerClickedXbox"
            xboxSpanClassObject.className = "fa-brands fa-xbox span clicked"
            playstationSpanClassObject.className = "fa-brands fa-playstation span"
            steamSpanClassObject.className = "fa-brands fa-steam span"
            marqueSpanPlay.className = "marque playstation" 
            marqueSpanXbox.className = "xbox marqueClicked" 
            marqueSpanSteam.className = "marque steam"
             
        break

        case "fa-brands fa-steam span clicked":
            background.className = "container"
            steamSpanClassObject.className = "fa-brands fa-steam span"
            playstationSpanClassObject.className = "fa-brands fa-playstation span"
            xboxSpanClassObject.className = "fa-brands fa-xbox span"
            marqueSpanPlay.className = "marque playstation" 
            marqueSpanXbox.className = "marque xbox" 
            marqueSpanSteam.className = "marque steam"
        break;

        case "fa-brands fa-steam span":

            background.className = "container containerClickedSteam"
            steamSpanClassObject.className = "fa-brands fa-steam span clicked"
            playstationSpanClassObject.className = "fa-brands fa-playstation span"
            xboxSpanClassObject.className = "fa-brands fa-xbox span"
            marqueSpanPlay.className = "marque playstation" 
            marqueSpanXbox.className = "marque xbox" 
            marqueSpanSteam.className = "steam marqueClicked"
        break;



        default:
        break;
    }
}
for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}



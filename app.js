const crayon = document.getElementById("crayon");
const gomme = document.getElementById("gomme");
const stylo = document.getElementById("stylo");
const compas = document.getElementById("compas");
const rapporteur = document.getElementById("rapporteur");

const box = document.querySelectorAll(".case");
const carton = document.getElementById("carton");
let reset = document.getElementById('reset')
let item;

let container = document.getElementById("game1");  
let content = container.innerHTML;


//COMPTEUR

let score = 0;

let compteur = document.getElementById('compteur');

let elt = document.getElementById("compteur");

function addscore(){
    score++;
}

function showscore(){
    elt.textContent="Le score est de : " +score+" / "+ nombre.length;
}


let nombre = [crayon, gomme, stylo, compas, rapporteur]
for (let i=0; i < nombre.length; i++) {
    nombre[i].addEventListener("click" , function master(){
        addscore();
        showscore();
    });
}


//FIN COMPTEUR



document.addEventListener("dragstart", function(e){
    console.log("cible:",e.target);
    dragStart(e.target);
    item = e.target;
});
document.addEventListener("dragend", function(e){
    dragEnd(e.target);
});

function dragStart(param) {
    param.className += ' tenu';
}

function dragEnd(param) {
    param.className = 'crayon';
}

for (const vide of box) {
    // Permet de mettre sur les 4 "cases" chacun des ses évènement d'écoute. (au lieu de faire 4x4lignes).
        vide.addEventListener('dragover', dragOver);
    
        vide.addEventListener('dragenter', dragEnter);
    
        vide.addEventListener('dragleave', dragLeave);
        // écriture en vert = Visual Studio code prévient que c'est une classe et non une fonction
}

carton.addEventListener('drop', function(){
    console.log("item :",item)
    dragDrop(item);
})

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave(e) {
    this.className = 'case';
}

function dragDrop(e) {
    carton.className = 'case';
    console.log(e);
    carton.append(e);
    addscore();
    showscore();
}

// RESET
document.getElementById('reset').addEventListener("click", function reset(){
    score = 0;
    document.getElementById("compteur").innerText = " Le score est de : 0 / 5"
    container.innerHTML= content;
});

// RESET FIN


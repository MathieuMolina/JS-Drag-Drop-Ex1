const base = document.getElementById("base");
const box = document.querySelectorAll(".case");
let carton = document.getElementById("carton");
let item;

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
    param.className = 'base';
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
}
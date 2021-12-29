let corDeFundo = ["#000000","#1A1A1A","#1A3D4C"];
let corDosElementosSobrepostos= ["#E6E6E6","#CCCCCC","#0D2526"];
let corDoTexto = ["white","black"];

let rand1, rand2, rand3;

function aleatorio() {
    rand1 = corDeFundo[Math.floor(Math.random()*3)];
    rand2 = corDosElementosSobrepostos[Math.floor(Math.random()*3)];
    rand3 = corDoTexto[Math.floor(Math.random()*2)];

    document.getElementsByTagName("main")[0].style.backgroundColor = rand1;
    document.getElementsByTagName("article")[0].style.backgroundColor = rand2;
    document.getElementsByTagName("p")[0].style.color = rand3;
}
const personagens = [{
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male"
}, {
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a"
}, {
    "name": "R2-D2",
    "height": "96",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, blue",
    "eye_color": "red",
    "birth_year": "33BBY",
    "gender": "n/a"
}, {
    "name": "Darth Vader",
    "height": "202",
    "mass": "136",
    "hair_color": "none",
    "skin_color": "white",
    "eye_color": "yellow",
    "birth_year": "41.9BBY",
    "gender": "male"
}, {
    "name": "Leia Organa",
    "height": "150",
    "mass": "49",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "19BBY",
    "gender": "female"
}, {
    "name": "Obi-Wan Kenobi",
    "height": "182",
    "mass": "77",
    "hair_color": "auburn, white",
    "skin_color": "fair",
    "eye_color": "blue-gray",
    "birth_year": "57BBY",
    "gender": "male"
}, {
    "name": "Yoda", 
    "height": "66", 
    "mass": "17", 
    "hair_color": "white", 
    "skin_color": "green", 
    "eye_color": "brown", 
    "birth_year": "896BBY", 
    "gender": "male"
}, {
    "name": "Palpatine", 
    "height": "170", 
    "mass": "75", 
    "hair_color": "grey", 
    "skin_color": "pale", 
    "eye_color": "yellow", 
    "birth_year": "82BBY", 
    "gender": "male"
}];

/*
const withoutGender = personagens.filter(pers => pers.gender === "n/a");

//console.log(withoutGender);

const mass30 = personagens.every(pers => pers.mass > 30);

//console.log(mass30);

const averageMass = Math.round(personagens
    .map(pers => parseInt(pers.mass))
    .reduce((total,atual) => total + atual ) / personagens.length);

//console.log(averageMass);

const averageHeight = Math.round(personagens
    .map(pers => parseInt(pers.height))
    .reduce((total,atual) => total + atual ) / personagens.length);

//console.log(averageHeight);

const firstWoman = personagens.find(pers => pers.gender === "female");

//console.log(firstWoman);
*/
////////////////////////////// PROF ////////////////////////////

const withoutGender = personagens.filter(pers => pers.gender === "n/a");

//console.log(withoutGender);

//segundo dava pra ser every ou filter

const totalMassa = personagens.reduce((total, atual) => {
    return total + +atual.mass;
}, 0);

const totalAltura = personagens.reduce((total, atual) => {
    return total + +atual.height;
}, 0);

const mediaMassa = totalMassa / personagens.length;
const mediaAltura = totalAltura / personagens.length;

//console.log(mediaAltura);
//console.log(mediaMassa);

const firstWoman = personagens.find(pers => pers.gender === "female");

//console.log(firstWoman);

const alturaMaiorQue150 = personagens.filter(personagem => personagem.height > 150);

//console.log(alturaMaiorQue150);

const homens = personagens
    .filter(personagem => personagem.gender === "male" && personagem.mass >50);
const merdiaAlturaHomens = homens.reduce((total, atual) => {
    return total + Number(atual.height)
}, 0);
const merdiaAlturaHomens = Math.round()
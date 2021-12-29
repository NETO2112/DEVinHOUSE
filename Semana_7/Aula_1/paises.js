const countries = [{
    "name": "Afghanistan",
    "region": "Asia",
    "population": 38928341,
    "area": 652230.0
  }, {
    "name": "Brazil",
    "region": "Americas",
    "population": 212559409,
    "area": 8515767.0
  }, {
    "name": "China",
    "region": "Asia",
    "population": 1402112000,
    "area": 9640011.0
  }, {
    "name": "Egypt",
    "region": "Africa",
    "population": 102334403,
    "area": 1002450.0
  }, {
    "name": "Estonia",
    "region": "Europe",
    "population": 1331057,
    "area": 45227.0
  }, {
    "name": "India",
    "region": "Asia",
    "population": 1380004385,
    "area": 3287590.0
  }, {
    "name": "Malawi",
    "region": "Africa",
    "population": 19129955,
    "area": 118484.0
  }, {
    "name": "Poland",
    "region": "Europe",
    "population": 37950802,
    "area": 312679.0
  }, {
    "name": "Romania",
    "region": "Europe",
    "population": 19286123,
    "area": 238391.0
  }];

/*
const countriesMoreThan100K = countries.filter(country => country.population >= 100000000);

//console.log(countriesMoreThan100K);

const nameAndRegion = [];

countries.forEach((country, index) => {
    nameAndRegion[index] = { "name" : country.name , "region" : country.region };
});

//console.log (nameAndRegion);

const everyEuropean = countries.every(region => countries.region == "Europe");

//console.log(everyEuropean);

const averagePopulation = countries.reduce((total, sum=countries.population) => total + countries.population);

//console.log(averagePopulation);
*/

//////////////////////////////////////////////////////////// Prof //////////////////////////////////////////////////////////////

const bigPopulation = countries.filter(country => country.population >= 100000000);

//console.log(bigPopulation);

const nameRegion = countries.map(countries => {
    return {
        name : countries.name,
        region : countries.region
    }
});

//console.log(nameRegion);

const everyEuropean = countries.every(region => countries.region == "Europe");

//console.log(everyEuropean);

const EuropePopulation = countries
    .filter(country => country.region === "Europe") //retorna países da europa
    .map(country => country.population) //retonra só a pop
/*
const averageEuropePopulation = Math.round(EuropePopulation.)
    .reduce((total, atual) => total + atual) //média da pop
*/
//console.log(averageEuropePopulation);

const firstAfrica = countries.find(country => country.region === "Africa");

//console.log(firstAfrica);

const asia = countries.filter(pais => pais.region === "Asia");

//console.log(asia);

const sumArea = countries
    .map(country => country.area)
    .reduce((total,atual) => total + atual);

console.log(sumArea);
class Vehicle {
    #name
    #year
    #type
    #km

    constructor(name, year, type) {
        this.#name = name;
        this.#year = year;
        this.#type = type;
        this.#km = 10000;
    }

    get name() {
        return this.#name
    }
    get type() {
        return this.#type
    }
    get year() {
        return this.#year
    }

    get km() {
        return this.#km;
    }

    set name(newName) {
        this.#name = newName;
    }
}

const carro = new Vehicle('gol', 2015, 'carro');
console.log(carro.km);
console.log(carro.name);
console.log(carro.type);
console.log(carro.year);
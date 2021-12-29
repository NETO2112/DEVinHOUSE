class Plants {
  constructor(name) {
    this.name = name;
    this.water = 50;
    this.alive = true;
  }

  waterPlant(waterPlus) {
    this.water += waterPlus;
    if (this.alive && this.water <= 100) {
      console.log(`${this.name} is alive! Water level = ${this.water}`);
    }
    else {
      console.log(`${this.name} is dead! :(`);
    }
  }
}

const flor = new Plants('Flor');

flor.waterPlant(-50);
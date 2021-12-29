class Animal {
    constructor(name, birthYear) {
      this.name = name;
      this.birthYear = birthYear;
    }
    
    calculateAge() {
      return (2021-this.birthYear);
    }
    
    static formatText(livros) {
      livros.filter((data => data > 2021));
    }
    
    static sortByBirthYear(animals) {
      animals.sort((a,b) => a.birthYear - b.birthYear);
    }
  }
  
  const cat = new Animal('Burger', 2018);
  const dog = new Animal('Sushi', 2014);
  const giraffe = new Animal('Tina', 2003);
  console.log(cat);
  console.log(cat.calculateAge());
  
  const array = [cat, dog, giraffe];
  console.log(Animal.sortByBirthYear(array));
  
  const arrayLivros = [
    { nome: 'Livro 1', ano: 1997},
    { nome: 'Livro 2', ano: 2005}
  ];
  
  Animal.formatText(arrayLivros);
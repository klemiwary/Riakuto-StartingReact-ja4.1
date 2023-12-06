class Person {
  constructor(name) {
    this.name = name;
  }

  greet = () => {
    console.log(`Hi, I'm ${this.name}`);
  };
}

const minky = new Person("Momo");
minky.greet();

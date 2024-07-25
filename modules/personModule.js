const person = {
  name: "John Doe",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
  haveBirthday() {
    this.age += 1;
    console.log(`Happy Birthday! I am now ${this.age} years old.`);
  },
};

module.exports = person;

// Class Definition
// 1
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.age = age;
    this.lastName = lastName;
  }
  greet() {
    return `Hello, my firstName is ${this.firstName} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
  }

  static genericGreeting() {
    return "Hello from the Person class!";
  }

  // Getter for full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  // Setter for full name
  set fullName(name) {
    // A 'set' accessor must have exactly one parameter.
    const [firstname, lastName] = name.split(" ");
    this.firstName = firstname;
    this.lastName = lastName;
  }
}

const person1 = new Person("Hit", 26);
console.log(person1);
console.log(person1.greet());

// 2
person1.updateAge(27);

// Class Inheritance
// 1 & 2
class Student extends Person {
  static totalStudents = 0; // Static property to track the total number of students
  constructor(firstName, age, studentID) {
    super(firstName, age);
    this.studentID = studentID;
    Student.totalStudents++; // Increment the totalStudents count
  }
  getStudentID() {
    return this.studentID;
  }
  greet() {
    return `Hello, my firstName is ${this.firstName}, I am ${this.age} years old, and my student ID is ${this.studentID}.`;
  }
  static getTotalStudents() {
    return Student.totalStudents;
  }
}

const student1 = new Student("Aaradhya", 20, "S12345");
const student2 = new Student("Bunny", 19, "S12346");

// Log the student ID
console.log(`Student ID: ${student1.getStudentID()}`);
console.log(student1.greet());

// Static Methods and Properties
// 1
console.log(Person.genericGreeting());
// 2
// Log the total number of students
console.log(`Total students: ${Student.getTotalStudents()}`);

// Getters and Setters
// 1
// Log the full name using the getter
const person2 = new Person("Hit", "Kor", 26);
console.log(person2.fullName);

// 2
// Update the name using the setter
person2.fullName = "Hita Korgaon";
// Log the updated full name
console.log(person2.fullName);

// Private Fields
// 1
class Account {
  // Private field for balance
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  // Method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}. New Balance: $${this.#balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  // Method to withdraw money
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: $${amount}. New Balance: $${this.#balance}`);
    } else if (amount > this.#balance) {
      console.log("Insufficient funds.");
    } else {
      console.log("Withdrawal amount must be positive.");
    }
  }

  // Method to get the current balance
  getBalance() {
    return this.#balance;
  }
}

// Create an instance of the Account class
const account = new Account(1000);

// Test deposit and withdraw methods
account.deposit(500); // Deposited: $500. New Balance: $1500
account.withdraw(200); // Withdrew: $200. New Balance: $1300
account.withdraw(-700);
account.withdraw(1500); // Insufficient funds.

// Check the current balance
console.log(account.getBalance()); // Output: 1300
console.log("#balance", (account.balance = 700));
console.log(account.getBalance()); //  Output is not: 2000 bcz balance is private

// 2
// Create an instance of the Account class
const account2 = new Account(1100);

// Test deposit method
account2.deposit(500); // Deposited: $500. New Balance: $1500

// Log the balance
console.log(`Current Balance: ${account2.getBalance()}`); // Output: Current Balance: $1500

// Test withdraw method
account2.withdraw(200); // Withdrew: $200. New Balance: $1300

// Log the balance
console.log(`Current Balance: ${account2.getBalance()}`); // Output: Current Balance: $1300

// Test withdraw method with insufficient funds
account2.withdraw(1500); // Insufficient funds.

// Log the balance
console.log(`Current Balance: $${account2.getBalance()}`); // Output: Current Balance: $1300

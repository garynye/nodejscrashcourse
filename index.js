const Person = require('./person');

//enstantiated a person
const person1 = new Person('ted', 40);


//called the greeting method from ther person calss instantiation
person1.greeting();

console.log(__dirname,__filename);
class Person {
   constructor(name, age)    {
        this.name = name;
        this.age = age;
   }
   greeting() {
       console.log(`my name is ${this.name} and I am ${this.age}`);
   }

};

//allows to use person object elsewhere to name it.
//upper case P means we import whole class.
module.exports = Person

console.log(__dirname,__filename);
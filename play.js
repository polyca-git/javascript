const person = {
name: 'Max',
age: 29,
greet: () =>{
    console.log('Hi, I am '+this.name);
} //placing an arrow function inside of the object and using the object's variable with this keyword.
};

person.greet(); //When you run the code it says Hi, I am undefined, we will solve this at the next commits.
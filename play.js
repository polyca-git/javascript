const person = {
name: 'Max',
age: 29,
greet() { //We can also directly define the function as another solution.
    console.log('Hi, I am '+this.name);
} //placing an arrow function inside of the object and using the object's variable with this keyword.
};

person.greet(); 
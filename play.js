const person = {
name: 'Max',
age: 29,
greet: function() { //removing arrow function and using the old way is a solution 
    console.log('Hi, I am '+this.name);
} //placing an arrow function inside of the object and using the object's variable with this keyword.
};

person.greet(); 
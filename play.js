const person = {
name: 'Max',
age: 29,
greet() { //We can also directly define the function as another solution.
    console.log('Hi, I am '+this.name);
} //placing an arrow function inside of the object and using the object's variable with this keyword.
};

const hobbies = ['Sports', 'Cooking']; //Declaration of Arrays
console.log(hobbies.map(hobby=>{ //Mapping the array and runnig a function for each element, it is like using a for loop, but also it creates a new arrray with the return.
    return 'Hobby: '+hobby;
}));
console.log(hobbies);

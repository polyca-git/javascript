const person = {
name: 'Max',
age: 29,
greet() { //We can also directly define the function as another solution.
    console.log('Hi, I am '+this.name);
} //placing an arrow function inside of the object and using the object's variable with this keyword.
};

const hobbies = ['Sports', 'Cooking']; //Declaration of Arrays
//console.log(hobbies.map(hobby=> 'Hobby: '+hobby)); //shorter way of using map functions over arrays.
//console.log(hobbies);
hobbies.push('Programming'); //Adding new element to the arrays.
console.log(hobbies);
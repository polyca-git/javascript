const person = {
name: 'Max',
age: 29,
greet() { //We can also directly define the function as another solution.
    console.log('Hi, I am '+this.name);
} //placing an arrow function inside of the object and using the object's variable with this keyword.
};
const printName = ({name}) => { //With the curly bracelets{} inside of paranthesis we can customize whic data we want. This is called Destructuring.
    console.log(name);
}

printName(person);

const {name, age} = person; //By doing destructuring, we took name and age properties from person object, we can use them here with the same name.
console.log(name, age);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies; //We can destructure arrays too. This way we take first 2 elements of the array to variables we named.
console.log(hobby1, hobby2);

//While doing object destructuring, we should specify the key names (like name, age etc.) but while doing array destructuring
//we can hive any name we want, because arrays dont have key names for their values.


/*
const hobbies = ['Sports', 'Cooking']; //Declaration of Arrays
//console.log(hobbies.map(hobby=> 'Hobby: '+hobby)); //shorter way of using map functions over arrays.
//console.log(hobbies);
//hobbies.push('Programming'); //Adding new element to the arrays.
const copiedArray = [...hobbies]; //This is called the spread operator, it adds the elements one by one, so copies the array.
const copiedPerson = {...person}; //We copied an object using the spread operator.
console.log(copiedArray);

const toArray = (...args)=>{ //This is called the rest operator, takes all the argument that is entering to the function, and bundles them as an array, so we can acces the unlimited arguments from inside the function.
    return args;
};

console.log(toArray(1, 2, 3));
*/
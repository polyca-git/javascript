
const name= 'Max';
let age=29;
const hasHobbies=true;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return ('Name is '+userName+', age is '+userAge+' and the user has hobbies: '+ userHasHobby);
}; //function kelimesini silip parametrelerden sonra => ekledik, arrow functionlar ile this keyword unu kullanabiliyoruz.

const addRandom = () => 1 + 2; //iff arrow function don't have any paramters, we should place a "()".
console.log(addRandom());
console.log(summarizeUser(name,age,hasHobbies));


const name= 'Max';
let age=29;
const hasHobbies=true;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return ('Name is '+userName+', age is '+userAge+' and the user has hobbies: '+ userHasHobby);
}; //function kelimesini silip parametrelerden sonra => ekledik, arrow functionlar ile this keyword unu kullanabiliyoruz.

const addOne = a => a + 1; //Tek parametre yollayaağımız için parametre tanımlarken parantezi kaldırdık.
console.log(addOne(1));

console.log(summarizeUser(name,age,hasHobbies));

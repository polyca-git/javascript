
const name= 'Max';
let age=29;
const hasHobbies=true;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return ('Name is '+userName+', age is '+userAge+' and the user has hobbies: '+ userHasHobby);
}; //function kelimesini silip parametrelerden sonra => ekledik, arrow functionlar ile this keyword unu kullanabiliyoruz.

const add =(a,b)=> a + b ; //return u sildik, bracelet i sildik ve fonksiyonumuzu böyle tanımladık.

console.log(add(1,2));

console.log(summarizeUser(name,age,hasHobbies));

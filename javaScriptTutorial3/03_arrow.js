// ++++++++++++ this key word :>In JavaScript, the this keyword refers to an object. ++++++++++

const myObj={
    name:"bharat",
    class:12,
    welcomeMsg: function(){
        console.log(`${this.name}, welcome to log in`);
        console.log(this)
    }
}
console.log(this)
console.log(myObj.welcomeMsg());
myObj.name="amit"
console.log(myObj.welcomeMsg());


// +++++++++++++++++Arrow++++++++++++++++++++

// const yoyo = function (){
//     let student="Mehul"
//     console.log(student);
// }
// console.log(yoyo())



// const yoyo =(num1,num2)=>{
//     return num1+num2;


// }
// console.log(yoyo(1,99))

// const yoyo =(num1,num2)=>num1*num2;

// console.log(yoyo(1,99))


// const yoyo =(num1,num2)=>num1*num2;               //inpresite Return
// console.log(yoyo(1,99))


// const siri=(hello1,hello2)=>( hello1 / hello2)

// console.log(siri(2,10))

const siri=(hello1,hello2)=>({name:"bharatBhoj"})

console.log(siri(2,10))


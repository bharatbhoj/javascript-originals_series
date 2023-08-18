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
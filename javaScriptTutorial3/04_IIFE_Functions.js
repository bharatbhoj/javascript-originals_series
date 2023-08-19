//IIFE:> Immediately Invoked Fuctions Expression.


//normal Fucntion

// function Add(Num1,Num2){
//     return Num1+Num2
// }
// console.log(Add(4,5))

//But we write IIFE Functions  ,Names IIFe
(function Db(){
    console.log("Db Connected")
})();


//Arrow Funvtions in IIFE MEthod ,Without NAme IIFe

( (Name)=>{
  console.log(`Db connected Two ${Name}`)
})("Don")
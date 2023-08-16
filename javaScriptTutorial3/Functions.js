// function myname(){
//     console.log("B");
//     console.log("h");
//     console.log("a");
//     console.log("r");
//     console.log("a");
//     console.log("t");
// }


// myname();

// function addnumber(number1,number2){
//     console.log(number1+number2);
// }

function addnumber(number1,number2){
    let result= number1+number2;
    return result;
}

function addnumber(number1,number2){
   return number1+number2;
}

  const result= addnumber(3,9)

  console.log(result)


  function logonusermessage(username){
   if(username ===undefined){
  console.log("please enter your name")
  return
   }

    return `${username} just log in`
  }

  console.log(logonusermessage())
var a=10;
let b=20;
const c=30;

function one(){
 const username="bharat";

 function two(){
  const website="youtube";
  console.log(website)
 }
  two()
}
one()

if(true){
  const userName ="yogesh_negi"
 if(userName==="yogesh_negi"){
  const website= " youtube"
  console.log(userName + website);
}
// console.log(website);
}
// console.log(username);

// +++++++++++++++++intresting+++++++++++++
// console.log( heybabes(5)); // this hoisting is allowed 

function  heybabes(siri){

  return  siri +1
}

// console.log(myname(5) ) // nbnut this hoisting is not allowed

const myname= function Addtwo(heyNokia){
return heyNokia +2
}


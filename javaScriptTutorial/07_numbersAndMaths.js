const score=new Number(100);
// console.log(score)

const marks=new Number(50)
// console.log(marks)
// console.log(marks.toString())


const count=new Number(1000000);
// console.log(count.toLocaleString('en-IN'))
// console.log(typeof(count))
// console.log(count.toLocaleString())


const Cto= new Number(100.00);
// console.log(Cto.toPrecision(2))
// console.log(Cto.toPrecision(3))
// console.log(Cto.toPrecision(4))
// console.log(Cto.toPrecision(5))

// ++++++++++++++++++++++++Math+++++++++++++++++++++++++++++++++++


// console.log(Math)
// console.log(Math.abs(-9))  //The Math.abs() method returns the absolute value of a number.
 //console.log(Math.round(4.6))  //The Math.round() method rounds a number to the nearest integer.
// 2.49 will be rounded down (2), and 2.5 will be rounded up (3).


// console.log(Math.ceil(4.6))
// console.log(Math.floor(4.9))
// console.log(Math.min(3,6,9,12,15))
// console.log(Math.max(3,6,9,12,15))

// console.log(Math.random())
// console.log(Math.random()*10)
// console.log(Math.round(Math.random() *10)+1)
// console.log((Math.random()*10)+1)
// console.log(Math.round(Math.random()*10)+1)
  
// console.log(Math.round(Math.random() *10)+1)

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);  // (* 20- 10 + 1) +10
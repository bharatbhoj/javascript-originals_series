const myArr=[10,20,30,40,50,60];
// myArr.push(70);
// console.log(myArr)
// Push:>The push() method adds new items to the end of an array.The push() method changes the length of the array.
// The push() method returns the new length.

myArr.pop()
// console.log(myArr)
// console.log(myArr)
// console.log(myArr.slice(0,3))
// console.log(myArr)
// console.log(myArr.splice(0,1,20))
// console.log(myArr)
// splice :The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// Example of Splice 

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
// console.log(months);

months.splice(4, 1,'May');
console.log(months)

months.splice(5, 1, 'don'); //this is for replace
// Replaces 1 element at index 4
// console.log(months);








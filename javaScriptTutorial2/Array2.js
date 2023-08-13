const marvel_Heros=["IronMan","Thor","SpiderMan","Hulk",];

const DC_heros=["Batman","Superman","WonderWoman","Flash"];

// marvel_Heros.push(DC_heros)
// console.log(marvel_Heros)


//Concat Methods
// const All_Heros=marvel_Heros.concat(DC_heros);
// console.log(All_Heros);

// Spread MEthod
//  const AllNewHeros=[...marvel_Heros,...DC_heros];
// console.log(AllNewHeros);

//Flat Methods
// const AnotherArray=[1,2,3,[4,5,6],7,[8,9,10,[11,12,13]]];
//  const NewAnotherArray=AnotherArray.flat(Infinity)
// console.log(NewAnotherArray)

console.log(Array.isArray("Bharat Bhoj"));

// From_Methods :> The Array.from() method returns an array from any object with a length property.
// The Array.from() method returns an array from any iterable object.

console.log(Array.from("Bharat Bhoj"))// this is use for convert in array

console.log(Array.from({name:"bharat"}))

// of_methods:> 
const Element1=1000;
const Element2=2000;
const Element3=3000;

console.log(Array.of(Element1,Element2,Element3))
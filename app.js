// // Map()

// //  Use case 1:

// // modify the elements of an Array. e.g. to double the elements

// const firstArray = [1, 2, 3, 4, 5];

// const doubleArray = firstArray.map((element) => element * 2);

// // *****same as arrow function but in regular function form
// // vvvvvvvv            vvvvvvvvvvvvvvv         vvvvvvvvvvvvvvv

// let doubleArray = firstArray.map(function(element) {
//   return element * 2;
// });

// // ************* ELEMENT MEANS NOTHING, IT IS JUST THE VARIABLE NAME WE ARE ASSIGNING TO THE INDIVIDUAL ELEMENTS OF THE ARRAY *************

// console.log(doubleArray);

// const doubleArray = firstArray.map((element) => element * 2);
//   |        |            |       |      |           |    | __ |
// declaring  |    name of orginal |      | __________|       |
// varaible   |         array      |      |
//            |                    |      |                 what we
//       variable name         declaring  |               want done to
//       of new array        map function |                each element
//                                        |
//                                        |
//                                        |
//                                 variable name we are assigning
//                                 to the individual elements of the array, could be anything, usually singular form of the array name, but it literally just represents the individual elements of the array

// *****the regular function shown above is the same way except that it has function - which is just signifying that we are declaring an anonymous function (callback in this case) and has curly braces, which are implied in the arrow function

// Reformat objects in array
// const gotCharacters = [
//   {
//     id: 1,
//     firstName: 'Jon',
//     lastName: 'Snow',
//   },
//   {
//     id: 2,
//     firstName: 'Daenerys',
//     lastName: 'Targaryen',
//   },
//   {
//     id: 3,
//     firstName: 'Arya',
//     lastName: 'Stark',
//   },
//   {
//     id: 4,
//     firstName: 'Eddard',
//     lastName: 'Stark',
//   },
//   {
//     id: 5,
//     firstName: 'Robb',
//     lastName: 'Stark',
//   },
// ];

// let rollCall = gotCharacters.map((character) => {
//   let newObj = {};
//   newObj['fullName'] = character.firstName + ' ' + character.lastName;
//   console.log(newObj);
//   return newObj;
// });

// console.log(gotCharacters);
// console.log(rollCall);

// callback certain elements instead of entire array

// const numArray = [1, 2, 3, 4];
// const sqrts = numArray.map((num) => {
//   return num % 2 === 1 ? num * 2 : num;
// });

// console.log(sqrts);

// doubled numbers that are odd

// turn a string into an array
// const language = 'JavaScript';
// const map = Array.prototype.map;
// const letters = map.call(language, (eachLetter) => {
//   return `${eachLetter}`;
// });

// console.log(letters);

// ============== although, I would probably just use the .from method instead of the map method, as below

// const language = 'JavaScript';
// const stringArray = Array.from(language);

// console.log(stringArray);

// iterate through nodelist

// const NodeList = document.querySelectorAll('p');

// let values = Array.prototype.map.call(NodeList, function(obj) {
//   return obj.value;
// });
// console.log(NodeList);

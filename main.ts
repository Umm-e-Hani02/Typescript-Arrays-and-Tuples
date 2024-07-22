// ===========================================================
//                          ARRAYS
// ===========================================================

// In TypeScript, arrays are data structures used to store a collection of elements of the same type. 
// They allow you to group multiple values into a single variable and provide various methods to manipulate these values.

// Declaring an array
let fruits: string[] = ["Apple", "Strawberry", "Kiwi"];
console.log(fruits); // OUTPUT: ["Apple", "Strawberry", "Kiwi"]

// Array Index
// An array index is a numerical representation used to access specific elements within an array. In TypeScript, 
// array indexing starts at 0, meaning the first element is accessed with index 0, 
// the second element with index 1, and so on.

let colours: string[] = ["Black", "Green", "Yellow"];
console.log(colours[1]); // OUTPUT: "Green"
console.log(colours[3]); // OUTPUT: undefined

// Array Length
// The array length is a property that returns the number of elements in an array. It provides the total count of 
// elements present in the array, and it is automatically updated as elements are added or removed.

let languages: string[] = ["English", "Spanish", "French", "Chinese"];
console.log(languages.length); // OUTPUT: 4

// ===========================================================
//                       ARRAYS METHODS
// ===========================================================

let names: string[] = ["Hani", "Hafsa", "Tayyaba", "Marwa"];

// push(): Adds one or more elements to the end of an array and returns the new length of the array.
names.push("Eman");
console.log(names); // OUTPUT: ["Hani", "Hafsa", "Tayyaba", "Marwa", "Eman"]

// pop(): Removes the last element from an array and returns that element.
let lastElement = names.pop(); 
console.log(lastElement); // OUTPUT: "Eman"

// unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
names.unshift("Faariya"); 
console.log(names); // OUTPUT: ["Faariya", "Hani", "Hafsa", "Tayyaba", "Marwa"]

// shift(): Removes the first element from an array and returns that element.
let firstElement = names.shift();
console.log(firstElement); // OUTPUT: "Faariya"

// slice(): Returns a shallow copy of a portion of an array into a new array selected from start to end (end not included).
let newnames = names.slice(1, 3);
console.log(newnames); // OUTPUT: ["Hafsa", "Tayyaba"]

// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
names.splice(2, 0 , "Zoya");
console.log(names); // OUTPUT: ["Hani", "Hafsa", "Zoya", "Tayyaba", "Marwa"]

// ===========================================================
//                    MULTIDIMENSIONAL ARRAYS
// ===========================================================

// Multi-dimensional Arrays in TypeScript

// Multi-dimensional arrays are arrays of arrays. They can represent more complex data structures like matrices or grids. 
// The most common multi-dimensional array is the 2-dimensional array, which can be visualized as a table or a matrix with
// rows and columns.

let values: number[][] = [[1, 2, 3], [4, 5, 6]];
console.log(values[1][2]); // OUTPUT: 6
// Accessing the third element of the second array

// ===========================================================
//                          TUPLES
// ===========================================================

// Tuples in TypeScript
// Tuples in TypeScript are a special type of array that allows you to store a fixed number of elements of different 
// types. They are useful when you want to group multiple pieces of data together and ensure each element is of a 
// specific type.

let user: [string, number] = ["Haris", 22];
console.log(user[1]); // OUTPUT: 22

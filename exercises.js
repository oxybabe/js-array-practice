// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------
//const myFunction = function(){} function expression, const doesn't hoist; if changed const to var, it does hoist

function newArray(word, num) { //function declaration; function declarations hoist in the entirety
  //defining parameters of the function
  let arr = []; //creating array
  for (let i = 0; i < num; i++) {
    //for loop that creates array length of num
    arr.push(word); //pushes the value into the array
  }
  return arr; //returns the new array
}
//console.log(newArray("sunshine", 3));

//another way of doing this:
//function myFunction(str, i) {
  //return Array(i).fill(str);
  //const result = [];
//}
// static method
// return Array.from (
//   {
//     length: i,
//   }, 
//   function () {
//     return structuredClone;
//   }
// )
// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

function reverseArray(arr) { //counting left to right
  //passing arr through function

  const arrReverse = [...arr].reverse(); //spreads the array and then reverses, which keeps it from mutating
  return arrReverse;

//   const result = [];
//   for(let i = 0; i < arr.length; i++) {
//     result.unshift(arr[i]); // use the shift method to add to the beginning
//   }
//   return result;
}
//console.log(reverseArray([1, 2, 3]));

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

function removeFalsy(arr) {
  const result = arr.filter(Boolean);
  return result;
//https://www.educative.io/answers/how-to-quickly-filter-out-all-falsy-values-from-an-array-in-js

  // const result = [];
  // for(let i = 0; i < arr.length; i++) {
  //   if(arr[i]) { if this is true, then push it into the array
  //     result.push(arr[i]);
  //   }
  // }
  // return result;
  //(!! not operator, '1' truthy, !'1' falsey, !!'1' truthy)
}
//console.log(removeFalsy([1, "test", undefined, null, 5]));

// function removeFalsyValues(arr) {
//   return arr.filter(function(el) { // filter those not mutate, filter passes into the function. If the element returns true, it will return to the array.
//     //if it returns false, it will not return into the array.
//     return !!el;
//   })
// }


// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of properties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

//TODO: FINISH THIS ONE
function nestedArray(nestedArr) {
  const obj = {}; 
  for (let i = 0; i < nestedArr.length; i++) {

      obj = [arr[i][0]];

    }
    // arr[i] //arr[i][0] returns just name //arr i is the nested array
    // arr[i][1] returns Charlie
    //dog['name']
    //dog[query]
    return obj;
  }
// function createdObj1(arr) {
//   const result = {};
//   for(let i = 0; i < arr.length; i++) {
//     result[arr[i][0]] = arr[i][1]; //set the value associated with the key
    
//     //need to do square brackets when you need to pass a string value, to set the value use =
//     //use square brackets to add or update the value
//   }
//   return result;
// }
// function createdObj1(arr) {
//   const result = {};
//   for(const index of arr) { //giving each element a variable, index is a parameter, 
//     result[index[0]] = index[1]; 
    
//     //need to do square brackets when you need to pass a string value, to set the value use =
//     //use square brackets to add or update the value
//   }
//   return result;
// }
//the keys of an object 
// could also use object.fromEntries(myArray)

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------


let arr = [];
function removeDuplicates(arr) {
    return [...new Set(arr)]; // creating a new set and pass it into the array (set can't have duplicates, but array can)
} // a set is unique values and can't have duplicates
//spreading the new set and placing it into the new array


// console.log(removeDuplicates([1, 2, 3, 4, 5, 4]))

//remind Mady to show filter method:
function removeDuplicates(arr) {
  return arr.filter (function (item, index) {
return arr.indexOf(item) === index; //array index of item = index; index of is going to return first index
  });
}
//forEach method
//forEach doesn't give us a return value, it's for side effects
//map, filter, reduce give us a return value
//includes returns true or false (!unique.inludes(element))

// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------
function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false 
    }
    arr1.sort(); //mutates
    arr2.sort();

        for (let i = 0; i < arr1.length; i++) {
          if (arr1[i] !== arr2[i]) {
            return false;
          }
        }
        return true;
}

return arr1.sort().join() === arr2.sort().join();//each array is their own thing, each arrays are unique
//by adding join, it makes them into strings

// console.log(compareArrays([1,2,3,4], [1,3,2,4]))



// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------

// -----------------------------------------------

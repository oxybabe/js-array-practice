// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

function newArray(word, num) {
  //defining parameters of the function
  let arr = []; //creating array
  for (let i = 0; i < num; i++) {
    //for loop that creates array length of num
    arr.push(word); //pushes the value into the array
  }
  return arr; //returns the new array
}
//console.log(newArray("sunshine", 3));

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

function reverseArray(arr) {
  //passing arr through function

  const arrReverse = [...arr].reverse(); //spreads the array and then reverses, which keeps it from mutating
  return arrReverse;
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
}
//console.log(removeFalsy([1, "test", undefined, null, 5]));

//https://www.educative.io/answers/how-to-quickly-filter-out-all-falsy-values-from-an-array-in-js

// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of properties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

//TODO: FINISH THIS ONE
function arr() {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i][0]];
    // arr[i] //arr[i][0] returns just name //arr i is the nested array
    // arr[i][1] returns Charlie
    //dog['name']
    //dog[query]
  }

  return obj;
}

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------

//remind Mady to show filter method
let arr = [];
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
// console.log(removeDuplicates([1, 2, 3, 4, 5, 4]))

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
    if (arr1.length != arr2.length) {
      return false 
    }
    else {
        for (let i = 0; i < arr1.length; i++) {
          if (arr1[i] != arr2[i]) {
          }
        }
        return true;
    }

}

// console.log(compareArrays([1,2,3,4], [1,2,3,4]))



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

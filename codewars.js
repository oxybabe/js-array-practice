// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number=function(array){
  //your awesome code here
  const result = [];
  for(let i = 0; i < array.length; i++) {
    array[i]
    const lineNumber = i + 1;
    const lineText = array[i];
    result.push(`${lineNumber}: ${lineText}`);
  }
  
  return result;
  
}

//map is a method and takes function as an argument
//x represent the value, the i represents the index
//map is when we want to transform every element in the array and transform it
//getting back a new array that transforms a new array
var number = function(array) {
    return array.map(function (x, i) {
        //for every index we are adding 1 and a colon
        return i + 1 + ": " + x; //the number is coerced into the string, and adds whatever the value of x
    });
};
//vaughn's solution

// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

function arr(N = 0) {
  const arrWithContents = [];
  for(let i = 0; i < N; i++) {
    arrWithContents.push(i);
  }
  
  return arrWithContents;
}

// const arr = (N = 0) => { //default value is 0
//     //the numbers 0 to N-1
//     let a = []; //create an empty array, if don't have the default, then pass the empty array
//     for (let i = 0; i < N; i++) { //we don't want to include N because it includes N-1
//         a.push(i); //printing i for each iteration of the loop
//     }
//     return a;
// }
//jay's solution


// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript


function flyBy(lamps, drone){
  // lamps is a string of x's
  // drone is a string of o's that ends with a 'T'
  // if 'xxxxxx' (six total x's)
  // and 'ooooT' (five total o's including current location)
  // then result would be 'ooooox';
  
  if(drone.length >= lamps.length) {
    return lamps.replaceAll('x', 'o');
  }
  
  let lampsArray = lamps.split(""); // ['x', 'x', 'x', 'x', 'x', 'x']
  for(let i = 0; i < drone.length; i++){//drone here is also a string but also has a length. it will through the length of drone
    lampsArray[i] ='o';//replacing x's with o's
  }
  
  return lampsArray.join("");
  
}

// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
  let sum = 0; 
    for (let i = 0; i < marks.length; i++) { 
      console.log(marks[i]); // calls each index
      sum += marks[i]; //adding the index to the total
    }
    return Math.floor(sum/marks.length); //math.floor rounds down the average
  };
  
  


// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043

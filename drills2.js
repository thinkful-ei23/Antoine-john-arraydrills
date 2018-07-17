function repeat(fn,n){
    for(let i = 0; i < n; i++){
        fn()
    }
}

function hello(){
    console.log('hello world')
}

function goodbye(){
    console.log('Goodbye world')
}

repeat(hello, 5)
repeat(goodbye, 5)


// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {

   const newArray = []
   for(let i = 0; i < arr.length; i++){
       if(fn(arr[i]) === true){
           newArray.push(arr[i])
       }
   }
   return newArray
}


function hazardWarningCreator(typeOfWarning){
    let warningCounter = 0;
   return function(location){
        warningCounter++
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`)
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`)
    }
}

const rockWarning = hazardWarningCreator('Rocks on the road!');
const hurricane = hazardWarningCreator('I would not be outside right now')
const blizzard = hazardWarningCreator('it might be cold')

// rockWarning('Montana')
// hurricane('FLorida')
// hurricane('Alabama')
// blizzard('California')

const turtleMove = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
let numMoves = [];
turtleMove
    .filter(num => num[0] >= 0 && num[1] >= 0)
    .map(num =>  num[0] + num[1])
    .forEach(num => console.log(num));

// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("firstLetterCap", () => {
  it("function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {

    const hitchhikersCharacters = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(firstLetterCap(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  }
  )

})
// b) Create the function that makes the test pass.
const firstLetterCap = characters => characters.map(({ name, occupation }) => // create a fucntion that takes a parameter of characters, characters.map iterates over each element.
  `${name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} is ${occupation}.` // name.split to split into array of words, .map to iterate over each word and the arrow funtion is invoked for each word capitalizing the first letter and .slice to concatenate from index 1 and up, .join to join all capitalized words together.
);

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("numberRemainders", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(numberRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(numberRemainders(hodgepodge2)).toEqual([ 2, 1, -1])
  })
})

const numberRemainders = (arr) => { // define a function called numberRemainders that takes in an array
  const newArray = [] //create a new empty array
  for (let i = 0; i < arr.length; i++) { // for loop
    if (typeof arr[i] === 'number') {    // if type of element at xurrent index is a number 
      const remainder = arr[i] % 3;      //calculate and store the remainder in variable
      newArray.push(remainder);          // push remainder to new array
    }
  }
  return newArray
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("sumOfCubedNumbers", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(sumOfCubedNumbers(cubeAndSum1)).toEqual(99)
    expect(sumOfCubedNumbers(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.
const sumOfCubedNumbers = (arr) => {           // create a function that takes in an array 
  let sum = 0;                                 // let sum start at 0

  for (let i = 0; i < arr.length; i++) {       //for loop to iterate 
    const cubedNumber = Math.pow(arr[i], 3);   // calculate and store to variable, Math.pow(x,y) = x to the power of y
    sum += cubedNumber;                        // sum equals the sum plus th cubed number
  }
  return sum
}


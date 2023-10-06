/* function myFunc() {
    console.log("this is my function")
}

//myFunc()

function greetMe(name) {
    console.log(`hello ${name}`)
}

greetMe("Evelyn")

function addTwoNumbers(number1, number2) {
    let sum = number1 + number2
    console.log(`The sum of two numbers (${number1}, ${number2}) is: ${sum}`)
    return sum
}

let resultOfAddTwoNumbers = addTwoNumbers(10, 2)
console.log(`The result of resultOfAddTwo Numbers is: ${resultOfAddTwoNumbers}`) */

function callBackExample() {
    console.log("i am a callback function")
}
callBackExample()

function funcExample(name, callback) {
    console.log(`hello ${name}`)
    callback()
}

funcExample("Evelyn", callBackExample)
//ex 1
const maxOfTwoNumbers = (x, y) => {
    if (x >= y){
        return x
    } else {
        return y
    }
}
console.log('Exercise 1 result: ', maxOfTwoNumbers(3,9))

//ex 2
const isAdult = (x) => {
    if (x >= 18) {
        return 'Adult'
    } else {
        return 'Minor'
    }
}
console.log('Exercise 2 result: ', isAdult(21))

//ex 3
const isCharAVowel = (x) => {
    if (x === 'a' || x === 'e' || x === 'i' || x === 'o'){
        return true
    } else {
        return false
    }
}
console.log('Exercise 3 reuslt: ', isCharAVowel('a'))

//ex 4
const generateEmail = (name, domain) => {
    return name + '@' + domain
}
console.log('Exercise 4 result: ', generateEmail('johnsmith', 'example.com'))

//ex 5
const greetUser = (name, timeOfDay) => {
    return 'Hello ' + name + ' Good ' + timeOfDay
}
console.log('Exercise 5 result: ', greetUser('Sam','morning'))

//ex 6
const maxOfThree = (num1, num2, num3) => {
    if(num1 >= num2 && num1 >= num3){
        return num1
    } else if (num2 >= num3) {
        return num2
    } else {
        return num3
    }
}
console.log('Exercise 6 result: ', maxOfThree(5, 10, 8))

//ex 7 
const calculateTip = (billAmount, tipPercentage) => {
    let tipAmount
    return tipAmount = billAmount * (tipPercentage / 100)
}
console.log('Exercise 7 result: ', calculateTip(50,20))

//ex 8
const convertTemperature = (temperature, scale) => {
    let celsius, fahrenheit
    if(scale === 'C') {
        return fahrenheit = (temperature * 1.8) + 32
    } else if (scale === 'F') {
        return celsius = (temperature - 32) * 5/9
    }
}
console.log('Exercise 8 result: ', convertTemperature(32, 'C'))

//ex 9 
const basicCalculator = (number1, number2, operation) => {
    if (operation === 'add'){
        return number1 + number2
    } else if (operation === 'subtract'){
        return number1 - number2
    } else if (operation === 'multiply') {
        return number1 * number2
    } else if (operation === 'divide'){
        return number1 / number2
    }
}
console.log('Exercise 9 results: ', basicCalculator(10, 5, 'subtract'))

//ex 10
const calculateGrade = (score) => {
    if (score >= 90) {
        return 'A'
    } else if (score <= 89 && score >= 80) {
        return 'B'
    } else if (score <= 79 && score >= 70) {
        return 'C'
    } else if (score <= 69 && score >= 60) {
        return 'D'
    } else {
        return 'F'
    }
}
console.log('Exercise 10 result: ', calculateGrade(85))
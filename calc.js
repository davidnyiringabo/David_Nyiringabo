// -------------------------------This is a manual method without using APIs----------------------------------------

// a)

function simpleCalc(number1, number2, operation) {
    let result;

    switch (operation) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
        default:
            return "Invalid operation"
    }

    return result
}

// A) only to add

function additionCalc(numberarray) {
    let result = 0;


    numberarray.forEach((element) => {
        result += element
    })
    return result

}

// $ git remote add origin < REMOTE_URL >
// b) only to multiply

function multiplication(numberarray) {
    let result = 1;


    numberarray.forEach((element) => {
        result *= element
    })
    return result

}

console.log(additionCalc([2, 3, 4, 5, 3]))


// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --That is the sample------------------------------------------------------------const


const express = require('express');
const app = express();

app.get("/add/:number", (req, res) => {
    let operation = req.params.number
    let numbers = operation.split(",")
    let num1 = parseInt(numbers[0])
    let num2 = parseInt(numbers[1]);

    let results = num1 + num2;
    console.log(results)

    res.send("The Sum of these numbers" + num1 + " And " + num2 + " Is " + results)
})

app.get('/multiply/:array', (req, res) => {
    let array = (req.params.array).split(',')

    let result = 0;
    array.forEach((element) => {
        let num = parseInt(element);

        result += num;
    })
    res.send("The multiplication of the numbers:" + array + " is " + result)
})

app.listen(5000, (err) => {
    if (err) {
        console.log(err)
    }
    console.log("The port is running");
})
let input = document.getElementById("input");
let input2 = document.getElementById("input2")
let output = document.getElementById("output");

const addition = () => {
    output.innerText = parseFloat(input.value) + parseFloat(input2.value)
}
const subtraction = () => {
    output.innerText = parseFloat(input.value) - parseFloat(input2.value)
}
const multiply = () => {
    output.innerText = parseFloat(input.value) * parseFloat(input2.value)
}
const divide = () => {
    output.innerText = parseFloat(input.value) / parseFloat(input2.value)
}

//Function for summing all numbers up to the number provided.
const sumAll = () => {
    let inputNum = parseFloat(inputSumAll.value);
    let total = 0;
    for (let index = inputNum; index > 0; index--) {
        total += index;

    }
    // display total in the output div
    document.getElementById('outputSumAll').innerHTML = `The sum of all numbers up to ${inputNum} is ${total}.`
}
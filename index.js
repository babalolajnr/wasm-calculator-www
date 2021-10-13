import * as wasm from "wasm-calculator"

// Buttons
const button0 = document.getElementById("0")
const button1 = document.getElementById("1")
const button2 = document.getElementById("2")
const button3 = document.getElementById("3")
const button4 = document.getElementById("4")
const button5 = document.getElementById("5")
const button6 = document.getElementById("6")
const button7 = document.getElementById("7")
const button8 = document.getElementById("8")
const button9 = document.getElementById("9")
const button00 = document.getElementById("00")
const buttonPoint = document.getElementById("point")
const buttonPlus = document.getElementById("plus")
const buttonMinus = document.getElementById("minus")
const buttonClear = document.getElementById("clear")
const buttonPlusOrMinus = document.getElementById("plusOrMinus")
const buttonPercent = document.getElementById("percent")
const buttonDivide = document.getElementById("divide")
const buttonTimes = document.getElementById("times")
const buttonEqual = document.getElementById("equal")

const operators = [buttonPlus, buttonMinus, buttonClear, buttonPlusOrMinus, buttonPercent, buttonDivide, buttonTimes, buttonEqual]
const characters = [button0, button1, button2, button3, button4, button5, button6, button7, button8, button9, button00, buttonPoint]

button1.addEventListener("click", e => {
    buildOperand("1")
})

button2.addEventListener("click", e => {
    buildOperand("2")
})

button3.addEventListener("click", e => {
    buildOperand("3")
})

button4.addEventListener("click", e => {
    buildOperand("4")
})

button5.addEventListener("click", e => {
    buildOperand("5")
})

button6.addEventListener("click", e => {
    buildOperand("6")
})

button7.addEventListener("click", e => {
    buildOperand("7")
})

button8.addEventListener("click", e => {
    buildOperand("8")
})
button9.addEventListener("click", e => {
    buildOperand("9")
})
button0.addEventListener("click", e => {
    buildOperand("0")
})
button00.addEventListener("click", e => {
    buildOperand("00")
})

buttonPoint.addEventListener("click", e => {
    buildOperand(".")
})

let operator = ""

plus.addEventListener("click", e => {
    // buildOperand("")
    operator = "+"
    console.log(operator)
})

const result = document.getElementById("result")


let operand1 = ""
let operand2 = ""

const buildOperand = (char) => {
    if (operator = "") operand1 += char
    else operand2 += char

    display()
    console.log(operand1)
}

const display = () => {
    result.innerHTML = operand1
}
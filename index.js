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
const result = document.getElementById("result")
const operand1 = document.getElementById("operand1")
const operand2 = document.getElementById("operand2")
const operator = document.getElementById("operator")

const operators = [buttonPlus, buttonMinus, buttonPlusOrMinus, buttonPercent, buttonDivide, buttonTimes]
const characters = [button0, button1, button2, button3, button4, button5, button6, button7, button8, button9, button00, buttonPoint]

characters.map((button) => {
    button.addEventListener("click", e => {
        buildOperand(button.innerText)
    })
})

const operands = {
    operand1: "",
    operand2: ""
}

let selectedOperator = ""
operators.map((operator) => {
    operator.addEventListener("click", e => {
        selectedOperator = operator.innerText
        highlightDisplay(selectedOperator)
    })
})

// build the operands
const buildOperand = (char) => {
    if (selectedOperator.length < 1) {
        operands.operand1 += char
        highlightDisplay("")
        operand1ResultDisplay()
    }
    else {
        operands.operand2 += char
        highlightDisplay(selectedOperator)
        operand2ResultDisplay()
    }
}

const operand1ResultDisplay = () => {
    result.innerText = operands.operand1
}

const operand2ResultDisplay = () => {
    result.innerText = operands.operand2
}

const highlightDisplay = (selectedOperator) => {
    operand1.innerText = operands.operand1
    operand2.innerText = operands.operand2
    operator.innerText = selectedOperator
}
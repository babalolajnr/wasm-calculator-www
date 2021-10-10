import * as wasm from "wasm-calculator"

document.getElementById("1").addEventListener("click", e => {
    buildOperand("1")
})
document.getElementById("2").addEventListener("click", e => {
    buildOperand("2")
})
document.getElementById("3").addEventListener("click", e => {
    buildOperand("3")
})
document.getElementById("4").addEventListener("click", e => {
    buildOperand("4")
})
document.getElementById("5").addEventListener("click", e => {
    buildOperand("5")
})
document.getElementById("6").addEventListener("click", e => {
    buildOperand("6")
})
document.getElementById("7").addEventListener("click", e => {
    buildOperand("7")
})
document.getElementById("8").addEventListener("click", e => {
    buildOperand("8")
})
document.getElementById("9").addEventListener("click", e => {
    buildOperand("9")
})
document.getElementById("0").addEventListener("click", e => {
    buildOperand("0")
})
document.getElementById("00").addEventListener("click", e => {
    buildOperand("00")
})
document.getElementById("point").addEventListener("click", e => {
    buildOperand(".")
})

document.getElementById("plus").addEventListener("click", e => {
    buildOperand(".")
})

const result = document.getElementById("result")

const operator = ""

let operand1 = ""
let operand2 = ""

const buildOperand = (char) => {
    operand1 += char
    display()
    console.log(operand1)
}

const display = () => {
    result.innerHTML = operand1
}
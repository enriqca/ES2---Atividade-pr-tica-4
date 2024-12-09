// Engenharia de software 2 - Atividade prática 4
// Henrique César

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

function exp(a,b){
    let result = 1;
    for(i=0;i<b;i++) result *= a;
    return result;
}

module.exports = { add, subtract, multiply, divide, exp };
let expr = document.querySelector("#result")
expr.textContent = ' '

function insert(value) {
    if (expr.textContent == "Infinity") {
        expr.textContent = ' '
    }
    expr.textContent += value
}

function erase(value) {
    if (value == "Backspace") {
        originalString = expr.textContent;
        newString = originalString.replace(originalString.slice(-1), ''); 
        expr.textContent = newString;
    } else {
        expr.textContent = ' '
    }
}

function calculate() {
    try {
        expr.textContent = eval(expr.textContent)
    } catch (e) {
        
    }
}
let expr = document.querySelector("#result")
var operators = ["*", "+", "/", "-"]

function insert(value) {
    const lastCharacter = expr.textContent.charAt(expr.textContent.length - 1)
    if (expr.textContent == "Infinity") {
        expr.textContent = ''
    }
    if (operators.includes(value) && operators.includes(lastCharacter)) {
        expr.textContent = expr.textContent.slice(0, -1)
    }   
    expr.textContent += value
}

function erase(value) {
    if (value == "Backspace") {
        expr.textContent = expr.textContent.slice(0, -1)
    } else {
        expr.textContent = ''
    }
}

function calculate() {
    try {
        expr.textContent = eval(expr.textContent)
    } catch (e) {
        
    }
}

document.addEventListener('keydown', (event) => {
  const keyName = event.key
  if (!isNaN(keyName)) {
    insert(keyName)

  } else if (keyName == "Backspace") {
      erase("Backspace")

  } else if (keyName == "-") {
      insert("-")

  } else if (keyName == ".") {
      insert(".")

  } else if (keyName == "/") {
      insert("/")

  } else if (event.shiftKey && event.code === 'Equal') {
      insert("+")

  } else if (event.shiftKey && event.code === 'Digit8') {
      insert("*")

  } else if (keyName == "=") {
    calculate()
  }

});
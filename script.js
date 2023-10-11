let value = ''
let storedValue = ''
let sumValues = ''
let operator = ''

const decimal = document.querySelector('.decimal')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const calcdisplay = document.querySelector('.calculatorDisplay')

numbers.forEach((number) => number.addEventListener("click", function (e) {
    getNumber(e.target.textContent)
    calcdisplay.textContent = value
    if (sumValues != ''){
        calcdisplay.textContent = sumValues.toString().slice(0,9) + " " + operator + " " + value
        
    }else
    if (storedValue != '') {
        calcdisplay.textContent = storedValue.slice(0,9) + " " + operator + " " + value
    }

}))

operators.forEach((op) => op.addEventListener("click", function (e) {
    getOperator(e.target.textContent)
    
    if(sumValues.toString().length <= 9){
        calcdisplay.textContent = storedValue.toString().slice(0,9) + " " + operator
    }else{
        calcdisplay.textContent = sumValues.toString().slice(0,9) + '..' + " " + operator
    }
    
}))

decimal.addEventListener("click", function (e) {

    if (value.includes('.')) { }
    else {
        getDecimal()
        calcdisplay.textContent = storedValue + " " + operator + " " + value
    }
})

clear.addEventListener('click', function (e) {
    clearDisplay()
})

equals.addEventListener('click', function (e) {
    solveOperation()
    if(sumValues.toString() <= 9){
    calcdisplay.textContent = sumValues
}else{
    calcdisplay.textContent = sumValues.toString().slice(0,9) + '..'
}
})


// FUNCTIONS

function getNumber(num) {
    if (value.length <= 6) {
        value += num;
    }

}

function getOperator(op) {
    operator = op
    if (storedValue != '' && value != '') {
        solveOperation()
    }
    if (sumValues == '') {
        storedValue = value
        value = ''
    } else {
        storedValue = sumValues
        value = ''
    }
}

function getDecimal(deci) {
    value = value + '.'

}

function solveOperation() {
    if (calcdisplay.textContent.includes('+')) {
        sumValues = Number(storedValue) + Number(value)
        return sumValues.toString()

    } else if (calcdisplay.textContent.includes('-')) {
        sumValues = Number(storedValue) - Number(value)
        if (sumValues == 0) {
            sumValues = '0'
        }
        console.log('resta')
        return sumValues.toString()

    } else if (calcdisplay.textContent.includes('X')) {
        sumValues = Number(storedValue) * Number(value)
        return sumValues.toString()

    } else if (calcdisplay.textContent.includes('/')) {
        sumValues = Number(storedValue) / Number(value)
        return sumValues.toString()
    }


}

function clearDisplay() {
    value = ''
    storedValue = ''
    sumValues = ''
    operator = ''
    calcdisplay.textContent = value
}



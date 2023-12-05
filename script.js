let display = document.getElementById('display');
let input = '';

const handleButtonClick = (event) => {
    const buttonText = event.target.textContent;
    if (buttonText === 'AC') {
        clearDisplay();
    } else if (buttonText === '←' || buttonText === 'CE' ) {
        removeValDisplay();
        if(input == ''){
            input = 0;
            updateDisplay();
        }
    } else if (buttonText === '=') {
        calculate();
    } else {
        appendSymbol(buttonText);
    }
}
const appendSymbol = (symbol) => {
    if(input == 0){
        input = '';
    }
    input += symbol;
    updateDisplay();
}


const clearDisplay = () => {
    input = '';
    updateDisplay();
}

const removeValDisplay = () => {
    input = input.slice(0, -1);
    updateDisplay();
}


const calculate = () => {
    try {
        input = eval(input).toString();
        updateDisplay();
    } catch (error) {
        input = 'Error';
        updateDisplay();
    }
}

const updateDisplay = () => {
    display.textContent = input;
}
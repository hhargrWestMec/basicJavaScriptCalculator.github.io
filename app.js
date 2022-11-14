
//output location
const outputBar = document.getElementById('outputText');

//keypress event Listeners    
window.addEventListener('keyup', (event) => {
    var keyPressed = event.key;
    if ( keyPressed === 'Backspace') {
      clearNumber();
    } else if ( keyPressed === '1' ) {
        updateNumber(1);
    } else if ( keyPressed === '2' ) {
        updateNumber(2);
    } else if ( keyPressed === '3' ) {
        updateNumber(3);
    } else if ( keyPressed === '4' ) {
        updateNumber(4);
    } else if ( keyPressed === '5' ) {
        updateNumber(5);
    } else if ( keyPressed === '6' ) {
        updateNumber(6);
    } else if ( keyPressed === '7' ) {
        updateNumber(7);
    } else if ( keyPressed === '8' ) {
        updateNumber(8);
    } else if ( keyPressed === '9' ) {
        updateNumber(9);
    } else if ( keyPressed === '0' ) {
        updateNumber(0);
    } else if ( keyPressed === '.' ) {
        updateNumber('.');
    } else if ( keyPressed === '+' ) {
        operation('+');
    } else if ( keyPressed === '-' ) {
        operation('-');
    } else if ( keyPressed === '/' ) {
        operation('/');
    } else if ( keyPressed === '*' ) {
        operation('*');
    } else if ( keyPressed === '=' ) {
        submit();
    }
}, false)

//'backspace' command to delete the first number
function clearNumber () {
    if ( numberOne != '' && numberTwo != '' && solution != '' ) {
        numberOne = '';
        numberTwo = '';
        solution = '';
        outputBar.innerHTML = numberOne;
        console.log('Number one and two were reset!');
        operationSymbol = '';

    } else if ( numberTwo != '') {
        numberTwo = '';
        outputBar.innerHTML = numberTwo;
        console.log('Number two was reset!');
            
    } else if ( numberOne != '' && numberTwo == '' ) {
        numberOne = '';
        operationSymbol = '';
        outputBar.innerHTML = numberOne;
        console.log('Number one was reset!');
        operationSymbol = '';
    }
}

//updates the number when a button is clicked
let numberOne = '';
let numberTwo = '';

function updateNumber (buttonClicked) { 
    if ( solution != '' && numberOne != '' && numberTwo != '' ) {
        numberOne = solution;
        solution = '';
        numberTwo = '';
            if ( numberTwo.length <= 9 ) { 
                numberTwo = numberTwo + '' + buttonClicked;
                outputBar.innerHTML = numberTwo;
                console.log(numberTwo);
            }
    }
    else if ( operationSymbol == '' ) {
        if ( numberOne.length <= 9 ) { 
            numberOne = numberOne + '' + buttonClicked;
            outputBar.innerHTML = numberOne;
            console.log(numberOne);
        }
    } else {
        if ( numberTwo.length <= 9 ) { 
            numberTwo = numberTwo + '' + buttonClicked;
            outputBar.innerHTML = numberTwo;
            console.log(numberTwo);
        }
    }
}

let operationSymbol = '';

function operation (buttonClicked) {
    if ( buttonClicked == '+' ) {
        operationSymbol = '+';
    } else if ( buttonClicked == '-' ) {
        operationSymbol = '-';
    } else if ( buttonClicked == '-' ) {
        operationSymbol = '-';
    } else if ( buttonClicked == '*' ) {
        operationSymbol = '*';
    } else if ( buttonClicked == '/' ) {
        operationSymbol = '/';
    }
    outputBar.innerHTML = operationSymbol;
    console.log(operationSymbol);
}


//submit function
let solution = '';
let solutionRounded = '';

function submit () {
    if ( numberOne != '' && operationSymbol != '' && numberTwo != '' ) {
        console.log('answer submited');
        solution = eval(numberOne + operationSymbol + numberTwo);
        solutionRounded = solution.toFixed(1);
        if ( solutionRounded.length > 10) {
            outputBar.innerHTML = 'TOO LARGE';
            console.log('The solution is ' + solution + ' which was rounded to ' + solutionRounded);
            operationSymbol = '';
            numberOne = '';
            numberTwo = '';
            console.log('Number one and two were reset!');

        } else {
        outputBar.innerHTML = solutionRounded;
        console.log('The solution is ' + solution + ' which was rounded to ' + solutionRounded);
        }
    }
}
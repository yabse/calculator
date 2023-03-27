let runnungTotal = 0;
let buffer = "0";
let prevousOperation;

const Screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }
    else{
        handleNumber(value);
    }
    screen.innerText = buffer;
}
function handleSymbol(symbol){
    switch(symbol){
    case 'c':
        buffer = '0';
        runnungTotal = 0;
        break;
    case '=':
        if(prevousOperation === null){
            return
        }
        flushOperation(parseInt(buffer));
        prevousOperation = null;
        buffer = runnungTotal;
        runnungTotal = 0;
        break;
    case '<-':
        if(buffer.length === 1){
            buffer = '0';
        }else {
            buffer = buffer.substring(0, buffer.length-1);
        }
        break;
    case '+':
    case '-':
    case '*':
    case '/':
        handleMaths (symbol);
        break;
    }
}
function handleMaths(symbol){
        if(buffer === '0'){
            return;
        }
        const intBuffer = parsInt(buffer);

        if(runnungTotal === 0){
            runnungTotal = intBuffer;
        }
        else{
            flushOperation(intBuffer);
        }
        prevousOperation = symbol;
        buffer = '0';
    }
function flushOperation(intBuffer){
    if(prevousOperation === '+'){
        runnungTotal += intBuffer;
    }else if(prevousOperation === '-'){
        runnungTotal -= intBuffer;
    }else if(prevousOperation === '*'){
        runnungTotal *= intBuffer;
    }else if(prevousOperation === '/'){
        runnungTotal /= intBuffer;
    }
}
function handleNumber(numberString){
    if(buffer === "0"){
        buffer = numberString;
    }else{
        buffer += numberString;
    }
}
function init(){
    document.querySelector('.calc-buttons').addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
        
    
}
init();
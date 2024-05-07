var num1Val = document.getElementById('num1');
var num2Val = document.getElementById('num2');

function calculate(sign){
    var num1Val = num1.value;
    var num2Val = num2.value;
    if(sign == '+') return (result.innerText = parseInt(num1Val) + parseInt(num2Val));
    if(sign == '-') return (result.innerText = parseInt(num1Val) - parseInt(num2Val));
    if(sign == '*') return (result.innerText = parseInt(num1Val) * parseInt(num2Val));
    if(sign == '/') return (result.innerText = parseInt(num1Val) / parseInt(num2Val));
}

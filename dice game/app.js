var user_Number = document.getElementById("user_Number");
var random_number = document.getElementById("random_number");
var result = document.getElementById("result");
var info_box_result = document.getElementById("info_box_result");
var win_html = document.getElementById("win");
var loss_html = document.getElementById("loss");
var total = document.getElementById("total");
var msg = document.getElementById("msg");
var cp = document.getElementById("cp");

var conut = 10;
var win = 0;
var loss = 0;





function tryMyLuck(user_Number) {
    var randomNumber = Math.random() * 6;
    var ceil = Math.ceil(randomNumber);
    // console.log(ceil);
    user_Number.innerText = user_Number;
    // console.log(user_Number);
    random_number.innerText = ceil;

    //total count main se aik minus krdo
    total.innerText = --conut;

    if (ceil === user_Number) {
        console.log("user wins");
        result.innerText = "You Won";
        info_box_result.style.backgroundColor = "green";
        result.style.color = "White";
        //win me 1 plus krdo
        win_html.innerText = ++win;
    } else {
        result.innerText = "You Loss";
        info_box_result.style.backgroundColor = "red";
        result.style.color = "White";
        loss_html.innerText = ++loss;
    }
    checkResult();
}

function checkResult(){
    if(conut == 0){
        if(win >= 2){
            msg.innerText = "ConGrats! You won the game";
            
        } if(win == 2 ) {
            cp.innerText ="Here is Your Cash Prize USd $1000";
        }
        else{
            msg.innerText = "Oops! You loss the game";
        }
        conut = 10;
        win = 0;
        loss = 0;
        total.innerText = conut;
        win_html.innerText = loss;
        loss_html.innerText = win;
    }
}
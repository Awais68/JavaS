// var string = "ABCD123as45DEFG6HIJKL7MNOP8QRST9UVWX0YZ";
// var password_h1 = document.getElementById("password");

// var password = "";
 
// function generatePassword() {
//     password = "";
//     for (var i = 0; i < 10; i++) {
//         var randomNumber = Math.round(Math.random() * string.length);
//         console.log("randomNUmber=>", randomNumber, string.charAt(randomNumber));
//         password = password + string.charAt(randomNumber);
//         console.log(password);
//     }
//     password_h1.innerText = password;
// }
// start from here

// var number = 5.6;
// // round
// console.log(Math.round(number));
// //floor
// console.log(Math.floor(number));
// //ceil
// console.log(Math.ceil(number));
// // number to string convert
//  console.log(typeof number);
//  console.log(typeof number.toString());

//  var price = "340a45.4";
// console.log("paresInt=>", parseInt(price.replace("a", "")));

//Dice number
// var userName = document.getElementById("userName");
// var dice =  document.getElementById("dice");
// var win_loss = document.getElementById("win_loss"); 
// var dice_input = document.getElementById("dice_input");
 

// var user = "";
// function generateDiceNumber(){
    
//   var userValue = dice_input.value;
//   if(userValue < 7) {
//      var diceNumber = Math.ceil(Math.random() * 6);
//      dice.innerText = diceNumber;
     
//      if (userValue == diceNumber) {
//         win_loss.innerText = "You Win";
//         win_loss.style.color = "Green";
//         var win = userValue == diceNumber;
//         console.log("win=>", userValue);

//     }  else {
//       win_loss.innerText = "Oops! You Loss, Try Again***";
//       win_loss.style.color = "orange";
//     }
//   } else {
//         win_loss.innerText = "Please Enter Number between 1 to 6";  
//         win_loss.style.color = "yellow";
//     }
//   }

var user_number = document.getElementById("user_number");
var random_number = document.getElementById("random_number");
var result = document.getElementById("result");
var info_box_result = document.getElementById("info_box_result");
var win_html = document.getElementById("win");
var loss_html = document.getElementById("loss");
var total = document.getElementById("total");
var msg = document.getElementById("msg");


var count = 10;
var win = 0;
var loss = 0;

function tryMyLuck (userNumber){
  // alert("Function Called")

  var randomNumber = Math.random() * 6;
  var ceil = Math.ceil(randomNumber);
  console.log(ceil);
  user_number.innerText = userNumber;
  random_number.innerText = ceil;

  //total count mei se aik minus krdo
  total.innerText = --count;

  if(ceil === userNumber ){
    console.log("user Wins");
    result.innerText = " Congratulations! You Won"
    info_box_result.style.background = "green"
    result.style.color = "white";

    //total count main se aik minus krdo 
    win_html.innerText = ++win;

  } else {
    result.innerText = "You Losss";
    info_box_result.style.backgroundColor = "red";
    result.style.color = "white";
    loss_html.innerText = ++loss;
  }
  checkResult();
}


  function checkResult() {
    if (count == 0) {
      if (win >= 3) {
        msg.innerText = "ConGrats! You Played Outstanding...";
      } else {
        msg.innerText = "Oop! Better Luck Next Time <3";
      }
      count = 10;
      win = 0;
      loss = 0;
      total.innerText = count;
      win_html.innerText = loss;
      loss_html.innerText = win;
    }
  }

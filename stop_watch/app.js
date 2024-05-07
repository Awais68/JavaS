var hours = document.getElementById("hours");
var minutes_html = document.getElementById("minutes");
var second = document.getElementById("seconds");


var milliSecond_html = document.getElementById("milliSecond");


var start_btn = document.getElementById("start");
var stop_btn = document.getElementById("stop");
var reset_btn = document.getElementById("reset");


var seconds = 0;
var milliSecond = 0;
var minutes = 0;

var watchInterval;

function start(){ 
   watchInterval = setInterval(function(){
    milliSecond++;
    if(milliSecond >= 999){
      second++
      milliSecond = 0
    }   
     if(second >= 59){
      minutes++
      second = 0
    }

    milliSecond_html.innerHTML = milliSecond;
    seconds.innerText = seconds
    minutes_html.innerText = minutes
   },1);
}
function stop(){
    clearInterval(watchInterval);
 }
function reset(){ 

}

// var now = new Date();
// var bd = new Date("12/01/1995");
// var milleseconds = now.getTime();
// var papersMillseconds = bd.getTime();
// var bdMillseconds = bd.getTime();
// var diff = papersMillseconds - milleseconds;



// var now = new Date();
// var bd = new Date("12/01/1995");
// var milleseconds = now.getTime();
// var

// console.log("millesconds =>", diff);
// console.log("sconds =>", Math.round(diff /1000 / 60));
// console.log("minutes =>", Math.round(diff /1000/ 60 / 60));
// console.log("Hours =>", Math.round(diff /1000 / 60 / 60 / 24));
// console.log("days =>", Math.round(diff /1000    / 60 / 60 / 24 / 30));
// console.log("Month =>", Math.round(diff /1000   / 60 / 60 / 24 / 30 / 12));
// console.log("Years =>", Math.round(diff /1000   / 60 / 60 / 24 / 30 / 12 / 365));

// var attendanceTime = new Date();
// console.log(attendanceTime);
// attendanceTime.setHours(18);

// attendanceTime.setMinutes(45);
// attendanceTime.setSeconds(30);
// console.log(attendanceTime);

// var now = new Date();
// var diff = now.getTime() - attendanceTime.getTime();
// var Minutes = Math.floor(diff/1000/60);
// console.log("Minutes =>", Minutes);

// if (Minutes <= 0) {
//     console.log("ontime You are on time. Keep it Up !");
// } else if (Minutes <= 5) {
//     console.log("You are late. Please Hurry up !"); 
// } else { 
//     console.log("You are absent. Please contact to HR !");
// }

var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var ampm = document.getElementById("am-pm");
var currentSeconds = null;

setInterval(function() {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();

    if(currentDate.getHours() > 12){
        ampm.innerText = "PM";
    } else {
        ampm.innerText = "AM";
        if( currentHour < 12){
            console.log(currentHour - 12);
        } else{
            currentHour = currentHour;
        }
    } 






    if (currentDate.getSeconds() < 10 ){
        currentSeconds = "0" + currentDate.getSeconds();
    } else {
        currentSeconds = currentDate.getSeconds();
    }

    if (currentDate.getMinutes() < 10 ){
        minutes = "0" + currentDate.getMinutes();
    } else {
        minutes = currentDate.getMinutes();
    }

    hours.innerText = currentDate.getHours();
    minutes.innerText = currentDate.getMinutes();
    seconds.innerText = currentSeconds;
}, 1000);


var now = new Date();
console.log(now);
var bulb_off = document.getElementById("bulb_off");
// var bulb_on = document.getElementById("bulb_on");
var bulbo = document.getElementById("bulb_g");

bulb_off.addEventListener("click", function() {
    console.log(bulbo.src);
    bulbo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr84uw0J0B1tHT-h2Og_VzDRwV8wGkIXvt9Q&s";
    bulbo.style.width= "400px";
    bulbo.style.height = "400px";
    bulbo.style.border = "100%"
});

bulbo.addEventListener("mouseover", function() {
    console.log(bulbo.src);
    bulbo.src = 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdfyyb_lUczAGlQAP2nRcarg3F-MjZWHuorQ&s";
    bulbo.style.width= "400px";
    bulbo.style.height = "400px";
    bulbo.style.border = "100%"
});
var btn = document.getElementById("btn");
var div_container = document.getElementById("div_container");

btn.addEventListener("click", function() {
    alert('Hello Click Event');
});

btn.addEventListener("mouseover", function() {
    alert("mouse is on the image screen");
});

div_container.addEventListener("mouseover", function() {
    console.log(div_container.src);
    div_container.src = "https://media.istockphoto.com/id/682359774/photo/cows-grazing-on-field.jpg?s=612x612&w=0&k=20&c=s0TZKsx0GiN1MfNtJBO8fObocBi1B4fOQxuoaMf8XUg=";
    
    div_container.style.width = "400px";
    div_container.style.height = "400px";
    div_container.style.border = "1px solid red";

});

div_container.addEventListener("mouseout", function() {
    div_container.src ="https://media0.giphy.com/media/XncE2zmvthjyg/giphy.webp?cid=790b7611mb1ib61t2934ciy5jis7zg4e0rme608xrg01wi5g&ep=v1_gifs_search&rid=giphy.webp&ct=g";
});



// // var name = prompt("Enter You name");

// console.log ("Hello World");

// var cities = ["Karachi", "Lahore", "Faisalabad", "Islamabad"];

// console.log(cities)
// console.log(cities[2])

//splice
// splice original array ko update krta he 
// splice ka method 3 paramaers 
// 1.index number (jahan se hamen add ya remove knne he 
//
//2. kitne items remove krne hen 
//3. jo items hamen add krne hen 

// var foods = ["Apple", "Banana", "watermelon", "Grapes", "kiwai", "Guawa"];
//after add an orange
// foods.splice(1 ,0, "orange");
// console.log("after add-->", foods);

// //after remove an item on index no 3 watermelon
// foods.splice(3,1);
// console.log("after remove-->", foods);

// //add and remove 
// foods.splice(2, 2, "Chiko", "mango");
// console.log("after add & remove", foods)

//------------------------------SLICE---------------------------------->>>>>>>>>>>>>>>>>>>>>>>>

//Array se elements ko copy krne ke lye 
//slice original array me koi change nh krta
//slice copy krke new array return krdeta hun
// slice ke 2 paramaters he
//1. kahan se copy krna start krna he
// //2. jahan tk copy krna he us se aik number zyada dete hen

// var copy = foods.slice(1, 2);
// console.log('copy using  slice-->', copy);
// console.log("foods slice-->", foods)

// // copy all elements after index number 
// var copyAll = foods(1, 0)

// // 7. indexOf 
// var students = [213, 2142, , 2321, 1242, 21, 242, 54, 556, 123 ];
// var userRollNumber = +prompt ("Enter user roll number");
// var 



// Class 19 March 2024
// For loop

//1. varib=able banate hen 
//2. condition
//3. increment ya decrement

// for (var i = 1; i <= 10; i++) { //it is called iteration 
//     console.log("Hello " + i);
// }

// for (var i = 1; i <= 10; i++) {
//     console.log("Square of " + i +" is " + i * i);
// }

// //print even number 
// for( var i = 1; i <= 20; i++) {
//     if(i % 2 == 0)  // if (i % 2 == 1) for odd number
//     console.log(i);
// }

//print table of 4 from 1 to 100
var tableNumber = prompt("Enter a Table Number #")
for (var i = 1; i <= 10;  i++) {
    document.write( tableNumber + " x " + i + " = " + tableNumber * i + "<br>");
}

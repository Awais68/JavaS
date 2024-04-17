
// Tasl no 1:
var picnic = "We have decide a picnic at sea side with out family";

console.log(picnic.length);

// Task No 2
// String to uppercase

// var name = prompt("Enter your name");
// var changeCase = name.toUpperCase();
// document.write(changeCase);

// console.log(changeCase);


// Task No 3
// String to lowercase

// var name1 = prompt("Enter your name");
// var a   = name1.toLowerCase();
// document.write(a);

// console.log(a);

// // Task No 4
// var client = "affan"
// var message = "send me the details of the project via email";

// console.log(message.indexOf("email"));

// task NO 5
// var message = "The quick brown fox jumps over the lazy dog";


// // task no 6
// var name = "affan";
// var cap = name.toUpperCase();
// console.log(cap);

// // task no 7
// var message = "The quick brown fox jumps over the lazy dog        ";

// console.log(message.length);
// console.log("Trim=>", message.trim().length);

// // // Task NO 8
// var string = prompt("Enter any word");
// const reg = /[aeiou]/gi;
// var count = string.match(reg);
// console.log(count.join(","));
// console.log(count.length);
 
// // Task NO 9
var str = "Hello World";
console.log("result",str.substring(3, 9));

// // Task NO 10

var fruits = ["apple", "banana", "cherry", "date", "fig"];
var selectedFruits = fruits.slice(2,4);
console.log(selectedFruits);

// ==================Question No-11=====================

var temperatures = [72, 78, 82, 88, 95, ];
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for(var i = 0; i < temperatures.length; i++){
    if(temperatures[i] > 80){
        console.log(days[i] + ' ' + temperatures[i] + ' ' + 'F');
    }
}

// ==================Question No-12=====================

var numbers = [5, 10, 15, 20, 25];
numbers.splice(2,0,12);
console.log(numbers);

// ==================Question No-13=====================

var words= ['Sky', 'Earth', 'Cloud', 'river', 'Sea', 'Waterfall', 'Human', 'Animal', 'Bird'];
for(var i = 0; i < words.length; i++){
    if(words[i].length > 5){
        var value = words.indexOf(words[i]);
        words.splice(value, 1);
    }
}
console.log(words);

// ==================Question No-14=====================

var numbers = [5, 10, 15, 20, 25];
var dummy_Number = prompt('Enter value');
var indexNumber = prompt('Enter index number');

numbers.splice(indexNumber, 0, dummy_Number);
console.log(numbers);


// ==================Question No-14=====================

var values = [5, 10, 15, 20, 25];
var user = prompt('Enter any value');
var newArr = [];
for(var i = 0; i < values.length; i++){
    if(values[i] < user){
        newArr = values.slice(0,values.indexOf(values[i])+1);
    }
}
console.log(newArr);


// ==================Question No-15=====================

var fruits = ["apple", "banana", "cherry", "date", "fig"];
console.log(fruits);
var user = prompt('Select any fruit number for remove from Array');
fruits.splice(user-1, 1);
console.log(fruits);

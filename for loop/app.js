// //   20 ka table banana hai
// var tableNumber = prompt(" Table Number")
// for (var i = 1; i <= 20; i++){
//     document.write( tableNumber +' x ' + i +' = ' + tableNumber * i  + "<br>")
// }

// var weekDays = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'sat', 'sun']

// document.write(weekDays[0])
// document.write(weekDays[1])
// document.write(weekDays[2])
// // document.write(weekDays[3])

// for(var i = 0; i < weekDays.length; i++ ) {
//     document.write(weekDays[i] +"<br>")
// }

// for (var Tawaf = 1; Tawaf <= 7; Tawaf++) {
//     document.write(Tawaf + ' Chakkar' + "<br>")
// }

// var userElaqa = prompt("Aap kahan tashref rakhte hen");
// var deliveryAvailable = false;
// for (var i = 0; i < karachiKeAlaqe.length; i++) {
//   if (karachiKeAlaqe[i] === userElaqa) {
//     deliveryAvailable = true;
//     document.write("Delivery Available");
//     break;
//   }
// }
// if (!deliveryAvailable) {
//   document.write("Delivery Not Available");
// }

//nested loop=>
// var userPrizeBond = [234, 235, 236, 237, 238, 323, 21, 313, 434, 124, 360];
// var prizeBondWinner = [
//   112, 152, 190, 201, 220, 236, 238, 250, 285, 310, 315, 320, 341, 360, 355,
//   380, 400,
// ];
// var userWon = [];
// for (var i = 0; i < userPrizeBond.length; i++) {
//   for (var j = 0; j < prizeBondWinner.length; j++) {
// console.log(
//   "i=>",
//   userPrizeBond[i],
//   "j=>",
//   prizeBondWinner[j],
//   userPrizeBond[i] === prizeBondWinner[j]
// );
//     if (userPrizeBond[i] === prizeBondWinner[j]) {
//       userWon.push(userPrizeBond[i]);
//     }
//   }
// }
// console.log("Prize bond ye nikle hen=>", userWon);

// var students1 = ["Ahmed", "Abdul", "Bilal", "Raza", "Haris", "Shoab"];
// var students2 = ["Hasan", "Tabish", "Usman", "Abdul", "Ahsan", "Hamza", "Bilal",];

// var duplication = []
// for(var i = 0; i < students1.length; i++){
//   for(var j = 0; j < students2.length; j++){
//     if(students1[i] === students2[j]){
//       duplication.push(students1[i])
//     }
//   }
// }
// console.log('These names are  in both list=>',duplication)

// var userElaqa = prompt("Aap kahan tashref rakhte hen");
// var deliveryAvailable = false;
// for (var i = 0; i < karachiKeAlaqe.length; i++) {
//   if (karachiKeAlaqe[i] === userElaqa) {
//     deliveryAvailable = true;
//     document.write("Delivery Available");
//     break;
//   }
// }
// if (!deliveryAvailable) {
//   document.write("Delivery Not Available");
// }

var a = prompt("Enter your desire")

for (var a = 0; a <= 10; a++) {
  document.write(a)
}
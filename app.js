//Todo ====  Chapter no 12 and 13 =================


//? ====  Q1 ======

//? Accept a character from the user
// const input = prompt("Enter a character:");


// if (input) {
//     const charCode = input.charCodeAt(0);

//   if (charCode >= 48 && charCode <= 57) {
//     console.log("The input is a number.");
//   } else if (charCode >= 65 && charCode <= 90) {
//     console.log("The input is an uppercase letter.");
//   } else if (charCode >= 97 && charCode <= 122) {
//     console.log("The input is a lowercase letter.");
//   } else {
//     console.log("The input is not a number or a letter.");
//   }
// } else {
//   console.log("Invalid input. Please enter a single character.");
// }

 //? ===  Q2 =====

//  var input1 = parseInt(prompt("Enter the First integer"));
//  var input2 = parseInt(prompt("Enter the Secound integer"));
//  if((input1) && (input2) ){
     
//     if(input1 > input2){
//         console.log( "Input1 is larger than Input2");
//     } else if (input2 > input1) {
//           console.log("Input2 is Larger than Input1");
//     } else {
//         console.log("Input1 and Input2 are equal");
//     }
// } else{
//     console.log("Invalid Input , Please enter valid integer");
// }

//? ===  Q3 ====

// var input = parseInt(prompt("Write a Number"));
// if(input > 0) {
//     console.log("Number is positive");
// }
//  else if (input < 0){
//     console.log("Number is Negative");
// } else if (input === 0) {
//    console.log("Number is zero");
// } else{
//     console.log("Not a Number, Please write a number");
// }

//? ===  Q4  ====

// var input = prompt("Enter Character");
// var vowel = ["a","e","i","o","u","A","E","I","O","U"];
// var isTrue = false;
// for(i=0; i<vowel.length;i++){
// if(input === vowel[i]){
//       console.log("True, It's a Vowel");
//       isTrue = true;
//       break;
// }
// }
// if(isTrue === false){
//     console.log("False, not a Vowel ")
// }


//? ===  Q5 ======

// var password = "Abdullah0909";
// var input = prompt("Enter a Password", "Please Enter Your Password");
// if(input === password){
//     console.log("Password is Correct!");
    
// } 
// else {
//   console.log("Password is Incorrect");
// }  

//? ====  Q6 ====
// var greeting;
// var hour = 19;
//  if (hour < 18) {
//      greeting = "Good day";
//      console.log(greeting);
     
// } else { greeting = "Good evening";
//     console.log(greeting);
//     }


// //? ==== Q7 ====
// var time = parseInt(prompt("Enter Time in 24 hour clock like '1900': "));
// if(  time >= 0 && time < 1200 ){
//   console.log("Good Morning");
// } else if(time >= 1200 && time < 1700 ){
//     console.log("Good Afternoon");
// } else if (time >= 1700 && time < 2100){
//     console.log("Good Evening");
// } else if ( time >= 2100 && time <= 2359) {
//    console.log("Good Night");
// }

//Todo ===========  CHAPTER 14 - 16 =============

//! Q1

// var studentName = [];

// //! Q2

// const studentData = {
//     futureStudentName : []
// } ;

// //! Q3
// var a = ["Apple", "Orange", "Banana"];
// //! Q4
// var b = [24, 45, 78, 15];
// //! Q5
// var c = [true, false, true];
// //! Q6
// var d = ["Apple", 24, true];
// //! Q7
// var edu = ["1) SSC<br>", "2) HSC<br>", "3) BCS<br>", "4) BS<br>", "5) BCOM<br>", "6) MS<br>", "7) M.Phil<br>", "8) PhD"];
// document.write(edu.join(""));
// //! Q8
// var studentName = ["Micheal", "John", "Tony"];
// var Score = [320,230,480];
// for(i=0; i<studentName.length; i++){
//     console.log("Score of " + studentName[i] + " is " + Score[i] + ". Percentage: "+ (Score[i]/500 * 100) + "%");
// }
// //! Q9
// var colors = ["Red","Orange", "Green <br>" ];
// document.write(colors.join(" "));
// console.log(colors);

// //? a

// colors.unshift(prompt("What color you want to add begining of Array"));
// document.write(colors.join(" "));
// console.log(colors);

// //? b

// colors.push(prompt("What color you want to add at Ending of Array"));
// document.write(colors.join());
// console.log(colors);

//  //? c

// colors.splice( 0, 0, " <br>DarkSalmon","LightSalmon");
// document.write(colors.join());    
// console.log(colors);

// //? d
// colors.shift();
// document.write(colors);
// console.log(colors);
// //? e
// colors.pop();
// document.write(colors);
// console.log(colors);

//? F
//  var indexToAdd = parseInt(prompt("At which index you want to add color"));
//  var colorToIndex = prompt("Enter the color name you want to add:");
//  if(indexToAdd >= 0 && indexToAdd <= colors.length){
//       // Add the color at the specified index
//     colors.splice(indexToAdd, 0, colorToIndex);    
//     //Display the updated array in console    
//     console.log("Updated array:", colors);
//     document.write( "Updated Array  " + colors.join(" "));

//  }else{
//     console.log("Invalid index. Please enter a valid index");
//  }

//? G

// var indexToDelete = parseInt(prompt("At Which index you want to Delete color"));
// var colorToIndex2 = prompt("How many colors you want to delete");
// if(indexToDelete >= 0 && indexToDelete <= colors.length){
//    colors.splice(indexToDelete, colorToIndex2);
//    console.log("Updated array:",colors)
//    document.write( "Updated Array  " + colors.join(" "));

// }

//! Q 10 

// var scores = [320, 230, 480, 120];
// console.log(scores);
// var ascendingOrder = scores.sort();
// console.log(ascendingOrder);

//! Q 11

// const cities = ["Karachi", "Peshawar", "Hyderabad", "Islamabd", "Quetta"];
// const selectedCities = [];
// for(var i = 2; i <= 4; i++){
//  if(i < cities.length){
//    selectedCities.push(cities[i]);
//  }
// }
// console.log(selectedCities);

//! Q12

// var arr = ["This", "is", "my", "cat"];
// console.log(arr);
// document.write(arr + "<br>")
// var update = arr.join(" ");
// console.log(update);
// document.write(update);

//! Q13

// var myArray = [];
// myArray.push("Array 1");
// myArray.push("Array 2");
// myArray.push("Array 3");
// myArray.push("Array 4");
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);

//! Q14

// var myArray = [];
// myArray.unshift("Value 1");
// myArray.unshift("Value 2");
// myArray.unshift("Value 3");
// myArray.unshift("Value 4");
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);

//! Q15

// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// var selectHTML = '<select id="manufacturerSelect">';

// for (var i = 0; i < phoneManufacturers.length; i++) {
//     selectHTML += '<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>';

// }

// selectHTML += '</select>';

// document.write(selectHTML);


  






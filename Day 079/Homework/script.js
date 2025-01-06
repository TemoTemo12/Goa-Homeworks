// // // // // // // // // // // // // // 1. JS Functions
// // // // // // // // // // // // // // Example 1: Calculate Average of an Array
// // // // // // // // // // // // // // Condition:
// // // // // // // // // // // // // // Write a function calculateAverage that takes an array of numbers as an argument and returns the average of those numbers.

// // // // // // // // // // // // // // Steps:

// // // // // // // // // // // // // // 1. Create a function named calculateAverage that accepts an array of numbers.
// // // // // // // // // // // // // // 2. Use a loop to sum up all the numbers in the array.
// // // // // // // // // // // // // // 3. Divide the sum by the length of the array to find the average.
// // // // // // // // // // // // // // 4. Return the average.



// // // // // // // // // // // // // // Example 2: Find the Maximum Value
// // // // // // // // // // // // // // Condition:
// // // // // // // // // // // // // // Write a function findMax that takes an array of numbers as an argument and returns the maximum value in the array.

// // // // // // // // // // // // // // Steps:

// // // // // // // // // // // // // // 1. Create a function named findMax that accepts an array of numbers.
// // // // // // // // // // // // // // 2. Initialize a variable to hold the maximum value.
// // // // // // // // // // // // // // 3. Use a loop to iterate through the array and update the maximum value.
// // // // // // // // // // // // // // 4. Return the maximum value.

// // // // // // // // // // // //###################################################################################

// // // // // // // // // // // // // // 1. JS ფუნქციები

// // // // // // // // // // // // // // მაგალითი 1: გამოთვალეთ მასივის საშუალო
// // // // // // // // // // // // // // მდგომარეობა:
// // // // // // // // // // // // // // დაწერეთ ფუნქციის გამოთვლა საშუალო, რომელიც არგუმენტად იღებს რიცხვთა მასივს და აბრუნებს ამ რიცხვების საშუალოს.

// // // // // // // // // // // // // // ნაბიჯები:

// // // // // // // // // // // // // // 1. შექმენით ფუნქცია, სახელად გამოთვლა საშუალო, რომელიც იღებს რიცხვთა მასივს.
// // // // // // // // // // // // // // 2. გამოიყენეთ ციკლი მასივის ყველა რიცხვის შესაჯამებლად.
// // // // // // // // // // // // // // 3. ჯამი გავყოთ მასივის სიგრძეზე საშუალოს საპოვნელად.
// // // // // // // // // // // // // // 4. დააბრუნეთ საშუალო.



// // // // // // // // // // // // // // მაგალითი 2: იპოვნეთ მაქსიმალური მნიშვნელობა
// // // // // // // // // // // // // // მდგომარეობა:
// // // // // // // // // // // // // // დაწერეთ ფუნქცია findMax, რომელიც არგუმენტად იღებს რიცხვთა მასივს და აბრუნებს მასივის მაქსიმალურ მნიშვნელობას.

// // // // // // // // // // // // // // ნაბიჯები:

// // // // // // // // // // // // // // 1. შექმენით ფუნქცია სახელად findMax, რომელიც იღებს რიცხვთა მასივს.
// // // // // // // // // // // // // // 2. ცვლადის ინიცირება მაქსიმალური მნიშვნელობის შესანარჩუნებლად.
// // // // // // // // // // // // // // 3. გამოიყენეთ მარყუჟი, რათა გაიმეოროთ მასივი და განაახლოთ მაქსიმალური მნიშვნელობა.
// // // // // // // // // // // // // // 4. დააბრუნეთ მაქსიმალური მნიშვნელობა.

// // // // // // // // // // function findMax(numbers) {

// // // // // // // // // //     if (numbers.length === 0) return 0;


// // // // // // // // // //     let sum = 0;


// // // // // // // // // //     for (let i = 0; i < numbers.length; i++) {
// // // // // // // // // //         sum += numbers[i];
// // // // // // // // // //     }

// // // // // // // // // //     let average = sum / numbers.length;

// // // // // // // // // //     return average;
// // // // // // // // // // }

// // // // // // // // // // let nums = [1, 2, 3, 4, 5];
// // // // // // // // // // console.log(findMax(nums)); 


// // // // // // // // // // // // // =============================

// // // // // // // // // // // // // Example 3: Reverse a String
// // // // // // // // // // // // // Condition:
// // // // // // // // // // // // // Write a function reverseString that takes a string as an argument and returns the string reversed.

// // // // // // // // // // // // // Steps:

// // // // // // // // // // // // // 1. Create a function named reverseString that accepts a string.
// // // // // // // // // // // // // 2. Use a loop to iterate through the string in reverse order.
// // // // // // // // // // // // // 3. Construct a new string by appending characters in reverse order.
// // // // // // // // // // // // // 4. Return the reversed string.

// // // // // // // // //######################################################################################################################################

// // // // // // // // // // // // // მაგალითი 3: სტრიქონის შებრუნება
// // // // // // // // // // // // // მდგომარეობა:
// // // // // // // // // // // // // დაწერეთ ფუნქცია reverseString, რომელიც იღებს სტრიქონს არგუმენტად და აბრუნებს სტრიქონს შებრუნებულად.

// // // // // // // // // // // // // ნაბიჯები:

// // // // // // // // // // // // // 1. შექმენით ფუნქცია სახელად reverseString, რომელიც იღებს სტრიქონს.
// // // // // // // // // // // // // 2. გამოიყენეთ ციკლი, რათა გაიმეოროთ სტრიქონი საპირისპირო თანმიმდევრობით.
// // // // // // // // // // // // // 3. ახალი სტრიქონის აგება სიმბოლოების საპირისპირო თანმიმდევრობით მიმატებით.
// // // // // // // // // // // // // 4. დააბრუნეთ შებრუნებული სტრიქონი.

// // // // // // // // //heelp


// // // // // // // // // // // // ===========================


// // // // // // // // // // // // 2. DOM - Beginner Level
// // // // // // // // // // // // Example 1: Change Text Content
// // // // // // // // // // // // Condition:
// // // // // // // // // // // // Write a JavaScript function to change the text content of an HTML element with a given ID.

// // // // // // // // // // // // Steps:

// // // // // // // // // // // // 1. Create an HTML file with a paragraph element and an ID.
// // // // // // // // // // // // 2. Write a JavaScript function changeText that accepts an ID and a new text.
// // // // // // // // // // // // 3. Use document.getElementById to select the element by ID.
// // // // // // // // // // // // // 4. Change the text content of the selected element.

// // // // //###########################################################################################################################

// // // // // / // // // // // // 2. DOM - დამწყები დონე
// // // // // // // // // // // // მაგალითი 1: ტექსტის შინაარსის შეცვლა
// // // // // // // // // // // // მდგომარეობა:
// // // // // // // // // // // // ჩაწერეთ JavaScript ფუნქცია მოცემული ID-ით HTML ელემენტის ტექსტური შინაარსის შესაცვლელად.

// // // // // // // // // // // // ნაბიჯები:

// // // // // // // // // // // // 1. შექმენით HTML ფაილი აბზაცის ელემენტით და ID-ით.
// // // // // // // // // // // // 2. ჩაწერეთ JavaScript ფუნქცია changeText, რომელიც მიიღებს ID-ს და ახალ ტექსტს.
// // // // // // // // // // // // 3. გამოიყენეთ document.getElementById ელემენტის ID-ით ასარჩევად.
// // // // // // // // // // // // // 4. შეცვალეთ შერჩეული ელემენტის ტექსტური შინაარსი.


    
// // // //     // let element = document.getElementById(elementId).textContent = 'hello';
// // // //     // element.textContent = 'Hello my name is Temo'

// // // // // // // // // // // ==============================

// // // // // // // // // // // Example 2: Change Background Color
// // // // // // // // // // // Condition:
// // // // // // // // // // // Write a JavaScript function to change the background color of an HTML element with a given ID.


// // // // // // // // // // // Steps:

// // // // // // // // // // // Create an HTML file with a div element and an ID.
// // // // // // // // // // // Write a JavaScript function changeBackgroundColor that accepts an ID and a color.
// // // // // // // // // // // Use document.getElementById to select the element by ID.
// // // // // // // // // // // Change the background color of the selected element.

// // // //function changeBackgroundColor(elementId, color) {
// // // //     // ელემენტის მოძებნა ID-ით
// // // //     let element = document.getElementById(elementId);

// // // //     // ფონის ფერის შეცვლა
// // // //     if (element) {
// // // //         element.style.backgroundColor = color;
// // // //     } else {
// // // //         console.log("ელემენტი აღნიშნული ID-ით არ მოიძებნა.");
// // // //     }
// // // // }

// // // // // // // // // // // ==============================

// // // // // // // // // // // Example 3: Show/Hide Element
// // // // // // // // // // // Condition:
// // // // // // // // // // // Write a JavaScript function to show or hide an HTML element with a given ID.

// // // // // // // // // // // Steps:

// // // // // // // // // // // Create an HTML file with a div element and an ID.
// // // // // // // // // // // Write a JavaScript function toggleVisibility that accepts an ID.
// // // // // // // // // // // Use document.getElementById to select the element by ID.
// // // // // // // // // // // Toggle the visibility of the selected element using the display style property.

// // // // // // // // // // // ========================================

// // // function toggleVisibility(elementId) {
// // //     // ელემენტის მოძებნა ID-ით
// // //     let element = document.getElementById(elementId);

// // //     // ელემენტის ჩვენება/დამალვა
// // //     if (element) {
// // //         if (element.style.display === 'none') {
// // //             element.style.display = 'block';
// // //         } else {
// // //             element.style.display = 'none';
// // //         }
// // //     } else {
// // //         console.log("ელემენტი აღნიშნული ID-ით არ მოიძებნა.");
// // //     }
// // // }


// // // // // // // // // // // Prompt



// // // // // // // // // // // Example 1: Calculate Rectangle Area
// // // // // // // // // // // Condition:
// // // // // // // // // // // Write a JavaScript function to prompt the user for the width and height of a rectangle and display the area.

// // // // // // // // // // // Steps:

// // // // // // // // // // // Write a function calculateRectangleArea to prompt for width and height.
// // // // // // // // // // // Calculate the area of the rectangle.
// // // // // // // // // // // Display the area using alert.

// // //help

// // // // // // // // // // =====================================


// // // // // // // // // // Example 2: Convert Temperature


// // // // // // // // // // Condition:
// // // // // // // // // // Write a JavaScript function to prompt the user for a temperature in Celsius and convert it to Fahrenheit.

// // // // // // // // // // Steps:

// // // // // // // // // // Write a function convertTemperature to prompt for Celsius temperature.
// // // // // // // // // // Convert the temperature to Fahrenheit using the formula: F = (C * 9/5) + 32.
// // // // // // // // // // Display the converted temperature using alert.

// //help

// // // // // // // // // // ======================================

// // // // // // // // // // Example 3: Calculate Circle Circumference


// // // // // // // // // // Condition:
// // // // // // // // // // Write a JavaScript function to prompt the user for the radius of a circle and display the circumference.

// // // // // // // // // // Steps:

// // // // // // // // // // Write a function calculateCircumference to prompt for the radius.
// // // // // // // // // // Calculate the circumference using the formula: C = 2 * π * r.
// // // // // // // // // // Display the circumference using alert.

// //help

// // // // // // // // // Comparison Operators



// // // // // // // // // Example 1: Compare Ages

// // // // // // // // // Condition:
// // // // // // // // // Write a JavaScript function to prompt the user for two ages and display if the first age is greater than, less than, or equal to the second age.

// // // // // // // // // Steps:

// // // // // // // // // Write a function compareAges to prompt for two ages.
// // // // // // // // // Use comparison operators to compare the ages.
// // // // // // // // // Display the result using alert.

// // function compareAges() {
   
// //     let age1 = prompt("გთხოვთ შეიყვანოთ პირველი ასაკი:");
    
// //     let age2 = prompt("გთხოვთ შეიყვანოთ მეორე ასაკი:");

    
// //     if (age1 > age2) {
// //         alert("პირველი ასაკი უფრო დიდია მეორე ასაკზე.");
// //     } else if (age1 < age2) {
// //         alert("მეორე ასაკი უფრო დიდია პირველ ასაკზე.");
// //     } else {
// //         alert("ასაკები ტოლია.");
// //     }
// // }


// // compareAges();


// // // // // // // // // ==================================

// // // // // // // // // Example 2: Compare Heights


// // // // // // // // // Condition:
// // // // // // // // // Write a JavaScript function to prompt the user for two heights and display if the first height is greater than, less than, or equal to the second height.

// // // // // // // // // Steps:

// // // // // // // // // Write a function compareHeights to prompt for two heights.
// // // // // // // // // Use comparison operators to compare the heights.
// // // // // // // // // Display the result using alert.

// function compareHeights() {

//     let height1 = prompt("გთხოვთ შეიყვანოთ პირველი სიმაღლე (სანტიმეტრებში):");

//     let height2 = prompt("გთხოვთ შეიყვანოთ მეორე სიმაღლე (სანტიმეტრებში):");

//     if (height1 > height2) {
//         alert("პირველი სიმაღლე უფრო დიდია მეორე სიმაღლეზე.");
//     } else if (height1 < height2) {
//         alert("მეორე სიმაღლე უფრო დიდია პირველ სიმაღლეზე.");
//     } else {
//         alert("სიმაღლეები ტოლია.");
//     }
// }


// compareHeights();



// // // // // // // // // ===================================

// // // // // // // // // Example 3: Compare Scores


// // // // // // // // // Condition:
// // // // // // // // // Write a JavaScript function to prompt the user for two test scores and display if the first score is greater than, less than, or equal to the second score.

// // // // // // // // // Steps:

// // // // // // // // // Write a function compareScores to prompt for two scores.
// // // // // // // // // Use comparison operators to compare the scores.
// // // // // // // // // Display the result using alert.

// function compareScores() {

//     let score1 = prompt("Enter the first score:");

//     let score2 = prompt("Enter the second score:");


//     if (score1 > score2) {
//         alert("First score is higher than the second score.");
//     } else if (score1 < score2) {
//         alert("Second score is higher than the first score.");
//     } else {
//         alert("Both scores are equal.");
//     }
// }

// compareScores();


// // // // // // // // // ================================

// // // // // // // // // Fifth Issue

// // // // // // // // // ===============================

// // // // // // // // // Logical Operators


// // // // // // // // // Example 1: Check Voting Eligibility


// // // // // // // // // Condition:
// // // // // // // // // Write a JavaScript function to prompt the user for their age and citizenship status, and display if they are eligible to vote.

// // // // // // // // // Steps:

// // // // // // // // // Write a function checkVotingEligibility to prompt for age and citizenship status.
// // // // // // // // // Use logical operators to check if the user is at least 18 years old and a citizen.
// // // // // // // // // Display the result using alert.

// let votingAge = 18
// let age = Number(prompt('enter your age for vote'))
// if(votingAge === age){
//     alert('you can vote for goverment')
// }else{
//     alert('you cant vote for goverment')
// }


// // // // // // // // =============================

// // // // // // // // Example 2: Check Admission Eligibility


// // // // // // // // Condition:
// // // // // // // // Write a JavaScript function to prompt the user for their test scores in Math and English, and display if they are eligible for admission (both scores must be at least 60).

// // // // // // // // Steps:

// // // // // // // // Write a function checkAdmissionEligibility to prompt for Math and English scores.
// // // // // // // // Use logical operators to check if both scores are at least 60.
// // // // // // // // Display the result using alert.

// function checkAdmissionEligibility() {
    
//     let mathScore = prompt("Enter your Math score:");
   
//     let englishScore = prompt("Enter your English score:");


//     if (mathScore >= 60 && englishScore >= 60) {
//         alert("Congratulations! You are eligible for admission.");
//     } else {
//         alert("Sorry, you are not eligible for admission.");
//     }
// }

// checkAdmissionEligibility();

// // // // // // // // ===============================


// // // // // // // // Example 3: Check Driving Eligibility


// // // // // // // // Condition:
// // // // // // // // Write a JavaScript function to prompt the user for their age and whether they have a driving license, and display if they are eligible to drive.

// // // // // // // // Steps:

// // // // // // // // Write a function checkDrivingEligibility to prompt for age and license status.
// // // // // // // // Use logical operators to check if the user is at least 18 years old and has a license.
// // // // // // // // Display the result using alert.

// let drivingAge = 18
// let age = Number(prompt('enter your age for driving license'))
// if(drivingAge === age){
//     alert('you can drive car')
// }else{
//     alert('you cant  drive car')
// }


// // // // // // // // ==============================

// // // // // // // // Six Issue

// // // // // // // // ==============================


// // // // // // // // Data Types


// // // // // // // // Example 1: Display Data Types

// // // // // // // // Condition:
// // // // // // // // Write a JavaScript function to prompt the user for a string, number, and boolean value, then display the data type of each.

// // // // // // // // Steps:

// // // // // // // // Write a function displayDataTypes to prompt for a string, number, and boolean.
// // // // // // // // Use typeof to get the data type of each input.
// // // // // // // // Display the data types using alert.

// function displayDataTypes() {
    
//     let userInputString = String(prompt("Enter a string:"));
    
//     let userInputNumber = Number(prompt("Enter a number:"));
    
//     let userInputBoolean = Boolean(prompt("Enter a boolean (true or false):"));

    
//     let typeString = typeof(userInputString);
//     let typeNumber = typeof(userInputNumber) ;
//     let typeBoolean = typeof(userInputBoolean);

    
//     alert(`String: ${typeString}\n Number: ${typeNumber}\n Boolean: ${typeBoolean}`);
// }


// displayDataTypes();

// // // // // // // ===========================

// // // // // // // Example 2: Convert String to Number


// // // // // // // Condition:
// // // // // // // Write a JavaScript function to prompt the user for a string representation of a number, convert it to a number, and display both the original and converted values with their data types.

// // // // // // // Steps:

// // // // // // // Write a function convertStringToNumber to prompt for a string representation of a number.
// // // // // // // Convert the string to a number using parseFloat.
// // // // // // // // Display both the original and converted values with their data types using alert.

//help




// // // // // ========================

// // // // // Seven Issue

// // // // // =========================

// // // // // Conditional Statements


// // // // // Example 1: Grade Classification


// // // // // Condition:
// // // // // Write a JavaScript function to prompt the user for a test score and display the grade (A, B, C, D, or F) based on the score.

// // // // // Steps:

// // // // // Write a function classifyGrade to prompt for a test score.
// // // // // Use conditional statements to classify the grade:
// // // // // 90-100: A
// // // // // 80-89: B
// // // // // 70-79: C
// // // // // 60-69: D
// // // // // Below 60: F
// // // // // Display the grade using alert.

// function classifyGrade() {
//     // Prompting for a test score
//     let score = Number(prompt("Enter the test score:"));
  
//     let grade;
//     if (score >= 90 && score <= 100) {
//         grade = "A";
//     } else if (score >= 80 && score <= 89) {
//         grade = "B";
//     } else if (score >= 70 && score <= 79) {
//         grade = "C";
//     } else if (score >= 60 && score <= 69) {
//         grade = "D";
//     } else if (score < 60 && score >= 0) {
//         grade = "F";
//     } else {
//         alert("Invalid score entered. Please enter a number between 0 and 100.");
//         return; 
//     }

//     alert(`The grade for score ${score} is ${grade}`);
// }


// classifyGrade();

// // // // // ========================

// // // // // Example 2: Check Even or Odd


// // // // // Condition:
// // // // // Write a JavaScript function to prompt the user for a number and display if it is even or odd.

// // // // // Steps:

// // // // // Write a function checkEvenOrOdd to prompt for a number.
// // // // // Use a conditional statement to check if the number is even or odd.
// // // // // Display the result using alert.

//help

// // // // // =======================

// // // // // Example 3: Check Age Group


// // // // // Condition:
// // // // // Write a JavaScript function to prompt the user for their age and display their age group (child, teenager, adult, or senior).

// // // // // Steps:

// // // // // Write a function checkAgeGroup to prompt for an age.
// // // // // Use conditional statements to classify the age group:
// // // // // 0-12: Child
// // // // // 13-19: Teenager
// // // // // 20-64: Adult
// // // // // 65 and above: Senior
// // // // // Display the age group using alert.

function checkAgeGroup() {
    
    let age = Number(prompt("Enter your age: "));

    
    let ageGroup;
    if (age >= 0 && age <= 12) {
        ageGroup = "Child";
    } else if (age >= 13 && age <= 19) {
        ageGroup = "Teenager";
    } else if (age >= 20 && age <= 64) {
        ageGroup = "Adult";
    } else if (age >= 65) {
        ageGroup = "Senior";
    } else {
        alert("Invalid age entered. Please enter a valid age.");
        return; 
    }

    
    alert(`Your age group is: ${ageGroup}`);
}


checkAgeGroup();


// // // // =============================

// // // // Eight Issue

// // // // ============================

// // // // For and While Loops


// // // // Example 1: Calculate Factorial


// // // // Condition:
// // // // Write a JavaScript function to prompt the user for a number and calculate its factorial using a for loop.

// // // // Steps:

// // // // Write a function calculateFactorial to prompt for a number.
// // // // Use a for loop to calculate the factorial.
// // // // Display the factorial using alert.

//heelp

// // // // =============================


// // // // Example 2: Sum of Even Numbers


// // // // Condition:
// // // // Write a JavaScript function to prompt the user for a number and calculate the sum of all even numbers from 1 to that number using a while loop.

// // // // Steps:

// // // // Write a function sumOfEvenNumbers to prompt for a number.
// // // // Use a while loop to calculate the sum of even numbers.
// // // // Display the sum using alert.

//h-heelp



// // // Example 3: Prime Numbers within a Range

// // // Condition:
// // // Write a JavaScript function to prompt the user for a number and display all prime numbers from 1 to that number using a for loop.

// // // Steps:

// // // Write a function displayPrimeNumbers to prompt for a number.
// // // Use nested for loops to find and display all prime numbers.
// // // // Display the prime numbers using alert.

//help

// // ===============================

// // Nine Issue

// // ==============================


// // Object Literal & Object Destructuring
// // Example 1: Display Book Information

// // Condition:
// // Write a JavaScript function to create an object representing a book and display its properties using object destructuring.

// // Steps:

// // Create an object literal book with properties: title, author, year.
// // Write a function displayBookInfo to destructure the book object and display its properties.

// ??????????????

// // Use alert to display the book information.

// let book = {
//     title: "Random book name",
//     author: "random book author",
//     year: 1925
// };

// alert(`book name is ${book.title} \n author who writted book is ${book.author} \n book published in ${book.year} \n`)



// // =============================

// // Example 2: Create and Display Student Information


// // Condition:
// // Write a JavaScript function to create an object representing a student and display its properties using object destructuring.

// // Steps:

// // Create an object literal student with properties: name, age, grade.
// // Write a function displayStudentInfo to destructure the student object and display its properties.

//???

// // Use alert to display the student information.

// let student = {
//     name: "John Cenaaa",
//     age: 16,
//     grade: 12
// };

// alert(`student name and lastname is ${student.name} \n student age is ${student.age} \n his grade is ${student.grade} `)

// ============================

// Example 3: Display Employee Information


// Condition:

// Write a JavaScript function to create an object representing an employee and display its properties using object destructuring.

// Steps:

// Create an object literal employee with properties: name, position, salary.
// Write a function displayEmployeeInfo to destructure the employee object and display its properties.
//???
// Use alert to display the employee information.

// let employee = {
//     name: 'idk'
//     position: 'cleaner'  //XD
//     salary: 120
// }

// alert(`name ${employee.name} \n position ${employee.position} \n salary ${employee.salary}`)

// ============================

// Ten Issue

// ===========================

// Arrays (Not Array ES6 Methods)


// Example 1: Find Maximum Value


// Condition:
// Write a JavaScript function to find the maximum value in an array of numbers.

// Steps:

// Write a function findMaxValue to accept an array of numbers.
// Use a loop to find the maximum value.
// Return and display the maximum value using alert.

//uhmm whaat? help

// ==========================

// Example 2: Calculate Average Value

// Condition:
// Write a JavaScript function to calculate the average value of an array of numbers.

// Steps:

// Write a function calculateAverageValue to accept an array of numbers.
// Use a loop to calculate the sum of the numbers.
// Calculate and return the average value.
// Display the average value using alert.

//heelp

// ==========================

// Example 3: Reverse Array


// Condition:
// Write a JavaScript function to reverse an array of numbers.

// Steps:

// Write a function reverseArray to accept an array of numbers.
// Use a loop to reverse the elements of the array.
// Return and display the reversed array using alert.

//heelp






//800th line code yay 
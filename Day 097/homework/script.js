// // level 97:
// // 1) შექმენით ფუნქცია, რომელიც მიიღებს რამდენიმე რიცხვს და დააბრუნებს ამ რიცხვების მაქსიმალურ მნიშვნელობას. გამოიყენეთ spread ოპერატორი.

// function findMax(...numbers) {
//     return Math.max(...numbers);
// }

// const maxNumber = findMax(3, 7, 10, 25, 6);
// console.log(maxNumber); // Output: 25


// // 2) გაქვთ რიცხვების სია. დაწერეთ ფუნქცია, რომელიც ამოირჩევს იმ რიცხვებს, რომლებიც დიდია 10-ზე. გამოიყენეთ filter მეთოდი.

// function filterGreaterThanTen(numbers) {
//     return numbers.filter(number => number > 10);
// }

// const numbersList = [5, 12, 18, 7, 3, 25];
// const filteredNumbers = filterGreaterThanTen(numbersList);
// console.log(filteredNumbers); // Output: [12, 18, 25]


// // 3) შექმენით HTML ფაილი, რომელშიც იქნება ტექსტი. დაწერეთ JavaScript კოდი, რომელიც მონიშნავს (highlight) კონკრეტულ სიტყვას mark ტეგის გამოყენებით.

// function highlightWord(word) {
//     const textElement = document.getElementById('text');
//     const text = textElement.innerHTML;
//     const highlightedText = text.replace(new RegExp(`(${word})`, 'gi'), '<mark>$1</mark>');
//     textElement.innerHTML = highlightedText;
// }

// highlightWord('JavaScript');


// // 4) მოცემულია სია, რომელშიც შესაძლებელია იყოს დუბლირებული ელემენტები. დაწერეთ ფუნქცია, რომელიც დააბრუნებს სიას, რომელშიც დუბლიკატები აღარ იქნება.

// function removeDuplicates(array) {
//     return [...new Set(array)];
// }

// const listWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
// const uniqueList = removeDuplicates(listWithDuplicates);
// console.log(uniqueList); // Output: [1, 2, 3, 4, 5]

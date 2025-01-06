// async function asyncFunc(promise) {
//     try {
//       const result = await promise;
//       if (result === 1) {
//         throw new Error('The result is 1, which is not allowed.');
//       } else {
//         console.log('The result is:', result);
//       }
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   }
  
//   // მაგალითი Promise-ის გამოყენების:
//   const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(2), 1000); // შეცვალეთ 2-ი ნებისმიერი სხვა რიცხვით
//   });
  
//   asyncFunc(myPromise);
  





// file1.js

// სტრინგის ცვლადი
// const myString = "Hello from file1.js!";

// // ექსპორტი
// export default myString;


// // file1.js

// // იმპორტის სინტაქსი
// import { myFunction, myVar1, myVar2 } from './file3.js';

// myFunction(); // გამოიტანს: ეს არის ექსპორტირებული ფუნქცია file3-დან.
// console.log(myVar1); // გამოიტანს: ეს არის პირველი ექსპორტირებული ცვლადი.
// console.log(myVar2); // გამოიტანს: ეს არის მეორე ექსპორტირებული ცვლადი.

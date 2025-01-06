// function carBrand(model, color, condition, gearbox){
//     this.model = model;
//     this.color = color;
//     this.condition = condition;
//     this.gearbox = gearbox;
// }


// let firstObj = new carBrand('Bmw', 'black', 'brand new', 'automatic')

// console.log(firstObj)


// ################################################################

//საკლასო სამუშაო::

// შექმენით კონსტრუქტორი თქვენს თავზე, სახელი,გვარი,ასაკი,ჰობი და პროფესია.

// გამოიყენეთ prompt და თითოეული მნიშვნელობა ჩასვით prompt - ით
// !

// ასევე ჩასვით ფუნქცია და ისე დაწერეთ ლოგიკა, რომ მოგესალმოთ და ასევე გითხრათ კომპლიმენტი თქვენს პროფესიაზე, 

// 'ვაა, რამაგარი პროფესია გქონია'

// კონსტრუქტორი ფუნქცია


// code:
function Person(firstName, lastName, age, hobby, profession) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.hobby = hobby;
    this.profession = profession;

    this.greet = function() {
        console.log(`გამარჯობა, ${this.firstName} ${this.lastName}!`);
        console.log(`ვაა, რამაგარი პროფესია გქონია: ${this.profession}`);
    };
}

// მონაცემების მოთხოვნა prompt-ით
let firstName = prompt("გთხოვთ ჩაწეროთ თქვენი სახელი:");
let lastName = prompt("გთხოვთ ჩაწეროთ თქვენი გვარი:");
let age = prompt("გთხოვთ ჩაწეროთ თქვენი ასაკი:");
let hobby = prompt("გთხოვთ ჩაწეროთ თქვენი ჰობი:");
let profession = prompt("გთხოვთ ჩაწეროთ თქვენი პროფესია:");

// ობიექტის შექმნა
let person = new Person(firstName, lastName, age, hobby, profession);

// მისალმება და კომპლიმენტი
person.greet();




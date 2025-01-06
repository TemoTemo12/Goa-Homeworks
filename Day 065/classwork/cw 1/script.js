// learned about return again for some reasons

// without return:

// function sayHi (name) {
//     console.log(`hello ${name} , how are you`)
// }
// sayHi("Temo")


// return example:

// function sayHi(name) {
//     return `hello ${name} , how are you`
// }

// console.log(sayHi('Temo'))



// #############################
// day 65 classwork

// შექმენით ობიექტი და გადაეცით 5 თვისება/მნიშვნელობა, მაგის შემდეგ შეცვალეთ მეორე თვისების მნიშვნელობა და ასევე ამოშალეთ მეოთხე და მეხუთე თვისება და მნიშვნელობა

// let person = {
//     name: 'Temo',
//     LastName: 'velijanashvili',
//     age: 12,
//     height: 1.80
// }

// console.log(`my name is ${person.name}`)


// console.log(person.['LastName'])

// change value
// person.height = 2.00

// delete value
// delete person.lastname

// ##############################################

// new things we learned:

// logical operations

// Py     JS
// and - &&
// or - ⏐⏐


// if(10 > 5){
//     console.log('gamarjoba')
// }else{
//     console.log('gagimarjos')
// }


// console.log(true && true)
// console.log(false && false)
// console.log(false && true)
// console.log(false && false)


//           true       false
// console.log(10 > 2 && 20 > 50)

// console.log(true II true)
// console.log(false II false)
// console.log(false II true)
// console.log(false II false)

//              true    false
// console.log(10 > 5 II 20 > 5)

// && and ოპერატორი ანიჭებს უპირატესობას false
// II or ოპერატორი ანიჟებს უპირატესობას true
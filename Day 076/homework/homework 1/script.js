//  ააწყვეთ პროგრამა რომელსაც მომხმარებელს შეეკითხება რიცხვს და შემდეგ მაგ რიცხვის ფესვს დააბრუნებს.
//  გააკეთეთ alert გარეშე, შემოიტანეთ html ში ფორმები ან დივი და მაგათზე გააკეთეთ, ჩართეთ დიზაინიც, გამოიყენეთ CSS.

document.getElementById('sqrtForm').addEventListener('submit', function(event) {

    event.preventDefault(); 

    let number = document.getElementById('numberInput').value;

    let resultDiv = document.getElementById('result');
    
    if (number === '') {

        resultDiv.textContent = 'Please enter a number.';

        return;
    }

    let sqrt = Math.sqrt(number);

    resultDiv.textContent = `The square root of ${number} is ${sqrt}.`;
    
});

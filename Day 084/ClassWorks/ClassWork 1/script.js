let cardNumber = document.getElementById('c-number');
let cardName = document.getElementById('name');
let month = document.getElementById('month');
let year = document.getElementById('year');
let cvc = document.getElementById('cvc');


function updateCardDetails() {
    const cardNumberValue = cardNumber.value.trim();
    const cardNameValue = cardName.value.trim().toUpperCase();
    const monthValue = month.value.trim();
    const yearValue = year.value.trim();
    const cvcValue = cvc.value.trim();

    let formattedCardNumber = '';
    for (let i = 0; i < cardNumberValue.length; i += 4) {
        formattedCardNumber += cardNumberValue.substr(i, 4) + ' ';
    }
    document.querySelector('.numbers').textContent = formattedCardNumber.trim();

    document.querySelector('.name').textContent = cardNameValue || 'Name';


    document.querySelector('.cvc').textContent = `${monthValue}/${yearValue}`;


    document.querySelector('.cvc').textContent = cvcValue || '00/00';
}

cardNumber.addEventListener('input', updateCardDetails);
cardName.addEventListener('input', updateCardDetails);
month.addEventListener('input', updateCardDetails);
year.addEventListener('input', updateCardDetails);
cvc.addEventListener('input', updateCardDetails);


updateCardDetails();
function generateRandomNumber() {
    let randomNumber = Math.random() * 20;
    document.getElementById('result').textContent = Math.floor(randomNumber);
}

// generateRandomNumber()

//############################

// function generateRandomNumber() {
//     const randomNumber = Math.random() * 10;
//     const resultElement = document.getElementById('result');
//     resultElement.textContent = randomNumber.toFixed(2);
//     resultElement.style.animation = 'none';
//     setTimeout(() => resultElement.style.animation = '', 10); // Restart animation
// }
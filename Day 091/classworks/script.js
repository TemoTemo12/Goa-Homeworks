// text adder

function addText() {
    const textContainer = document.getElementById('text-container');
    const newText = document.createElement('p');
    newText.id = 'added-text';
    newText.textContent = prompt('enter text to display it');
    textContainer.appendChild(newText);
}

// text remover

function removeText() {
    const textContainer = document.getElementById('text-container');
    const addedText = document.getElementById('added-text');
    if (addedText) {
        textContainer.removeChild(addedText);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const colorPicker = document.getElementById('color');
    const boxContainer = document.querySelector('.box-container');
    const exitBox = document.querySelector('.exit-box');

    // Change the background color of the box
    colorPicker.addEventListener('input', function() {
        boxContainer.style.backgroundColor = colorPicker.value;
    });

    // Add dragging functionality
    let isDragging = false;
    let offsetX, offsetY;

    boxContainer.addEventListener('mousedown', function(e) {
        isDragging = true;
        offsetX = e.clientX - boxContainer.getBoundingClientRect().left;
        offsetY = e.clientY - boxContainer.getBoundingClientRect().top;
        boxContainer.style.position = 'absolute';
        boxContainer.style.transition = 'none'; // Disable transition during dragging
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            boxContainer.style.left = `${e.clientX - offsetX}px`;
            boxContainer.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
        boxContainer.style.transition = 'background-color 0.3s ease'; // Re-enable transition after dragging
    });

    // Close the box when the exit button is clicked
    exitBox.addEventListener('click', function() {
        boxContainer.style.display = 'none';
    });
});




function changeTextColor(elementId, color) {
    document.getElementById(elementId).style.color = color;
}

// Example usage:
// This will change the text color of an element with the ID 'myText' to red
changeTextColor('myText', 'red');

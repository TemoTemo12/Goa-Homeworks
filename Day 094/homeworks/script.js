// Level 94:



// 1) solo learn 

// done

// 2) img slider გავაკეოთ ლამაზი ვერსია ოღონდ :დდ

// let currentIndex = 0;
// const slides = document.querySelectorAll('.slide');
// const totalSlides = slides.length;

// document.querySelector('.next').addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % totalSlides;
//     updateSlider();
// });

// document.querySelector('.prev').addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//     updateSlider();
// });

// function updateSlider() {
//     const offset = -currentIndex * 100;
//     document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
// }


// 3) ეროუ ფუნქცია რომელიც დაიმახსოვრებს array და ასევე objec მათ გადაუვაროთ for in და for of

// const processData = (arr, obj) => {

//     for (let item of arr) {
//         console.log(item);
//     }


//     for (let key in obj) {
//         console.log(`${key}: ${obj[key]}`);
//     }
// };


// const array = [1, 2, 3, 4];
// const object = { a: 1, b: 2, c: 3 };

// processData(array, object);


// 4) ვებსაიტი ავაგოთ დღეს მიერ ნაწავლი event ებით

// 1. Change Text on Button Click
document.getElementById('changeTextBtn').addEventListener('click', () => {
    document.getElementById('title').textContent = "You clicked the button!";
});

// 2. Change Background Color on Input
document.getElementById('bgColorInput').addEventListener('input', (event) => {
    document.body.style.backgroundColor = event.target.value;
});

// 3. Sticky Note Movable

// some code is not writted by me

const stickyNote = document.getElementById('stickyNote');

let isDragging = false;
let offsetX, offsetY;

stickyNote.addEventListener('mousedown', (event) => {
    isDragging = true;
    offsetX = event.clientX - stickyNote.offsetLeft;
    offsetY = event.clientY - stickyNote.offsetTop;
    stickyNote.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        stickyNote.style.left = `${event.clientX - offsetX}px`;
        stickyNote.style.top = `${event.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    stickyNote.style.cursor = 'grab';
});

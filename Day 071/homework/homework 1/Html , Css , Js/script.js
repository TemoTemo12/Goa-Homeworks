
let counterElement = document.getElementById('counter');
let count = 0;

document.getElementById('plus').addEventListener('click',  function() {  
    count++;
    counterElement.textContent = count;
});

document.getElementById('reset').addEventListener('click',  function() {
    count = 0;
    counterElement.textContent = count;
});

document.getElementById('minus').addEventListener('click',  function() {
    count--;
    counterElement.textContent = count;
});
// 14 lines without spaces
// homework:

// 1) შექმენთ ფუნქცია რომელიც დაამატებს ტექსტს თქვენს html ში 

// function addText() {
//     let div = document.getElementById("myDiv");
//     div.innerHTML += " დამატებული ტექსტი!";
// }

// done

// 2) შექმენით ფუნქცია რომელიც ამოშლის ტექსტს თქვენს html ში

// function removeText() {
//     var div = document.getElementById("myDiv");
//     div.innerHTML = "";
// }

// done

// 3) შექმენით პატარა ვიკიპედია ვებსაიტი აქმდე ნასწავლი მასალით 

function removeText() {
    var articleContent = document.getElementById("articleContent");
    articleContent.style.opacity = "0";
    setTimeout(() => articleContent.innerHTML = "", 1000);
}

// 4) შექმენთ ვებსაიტი რომელიც დაკლიკების შემდეგ გამოაჩენს ტექტებს ხოლო შემდეგ კი წაშლის ❤️  რაიმე ღილაკით

// function addText() {
//     let textContainer = document.getElementById("textContainer");
//     textContainer.innerHTML = "გამოჩენილი ტექსტი! ❤️";
// }

// function removeText() {
//     let textContainer = document.getElementById("textContainer");
//     textContainer.innerHTML = "";
// }

// done

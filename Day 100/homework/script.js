// 1


function printHello() {
    setTimeout(function() {
        console.log("Hello, World!");
    }, 3000);
}

printHello();



// 2



setTimeout(function() {
    console.log("პირველი ფრაზა");
    setTimeout(function() {
        console.log("მეორე ფრაზა");
    }, 2000);
}, 1000);



// 3



setTimeout(function() {
    console.log("1");
    setTimeout(function() {
        console.log("2");
        setTimeout(function() {
            console.log("3");
        }, 1000);
    }, 1000);
}, 1000);




// 4



function showMessage(message, delay) {
    setTimeout(function() {
        console.log(message);
    }, delay);
}

showMessage("მშვიდობით", 3000); // 3 წამში დაბეჭდავს "მშვიდობით"




// 5



setTimeout(function() {
    console.log("დრო ამოიწურა");
    setTimeout(function() {
        console.log("ხუმრობა");
    }, 1000);
}, 5000);

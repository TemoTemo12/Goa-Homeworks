// console.log("hi")
// setTimeout(() => {
//     console.log("5 წამის შემდეგ მოვიდა ეს ფუნქცია")
// }, 5000)
// setTimeout1 პარამეტრი არის callback() ანუ თუ რაიმე ტესტი გაქვს ცვლადი ის ხდება

const გიმახვრა = () => {
    console.log("ლორთქ თორთქ")
}

const შიომ = () => {
    console.log("ერთი წუთია შენგან შორს!")
}

// გიმახვრა();
// შიომ();

setTimeout(გიმახვრა, 5000);  // api1
setTimeout(შიომ, 1000);       // api2

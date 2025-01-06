// 1
function* infiniteNumbers() {
  let num = 0;
  while (true) {
      yield num;
      num++;
  }
}

// გამოსაყენებლად:
const generator = infiniteNumbers();
console.log(generator.next().value);  // 0
console.log(generator.next().value);  // 1
console.log(generator.next().value);  // 2



// 2


function* evenNumbers() {
  let num = 0;
  while (true) {
      yield num;
      num += 2;
  }
}

// გამოსაყენებლად:
const evenGen = evenNumbers();
console.log(evenGen.next().value);  // 0
console.log(evenGen.next().value);  // 2
console.log(evenGen.next().value);  // 4



// 3


function* randomNumbers() {
  while (true) {
      yield Math.random();
  }
}

// გამოსაყენებლად:
const randomGen = randomNumbers();
console.log(randomGen.next().value);  // შემთხვევითი რიცხვი
console.log(randomGen.next().value);  // სხვა შემთხვევითი რიცხვი



// 4


function* letterByLetter(word) {
  for (let letter of word) {
      yield letter;
  }
}

// გამოსაყენებლად:
const wordGen = letterByLetter("გამარჯობა");
console.log(wordGen.next().value);  // "გ"
console.log(wordGen.next().value);  // "ა"
console.log(wordGen.next().value);  // "მ"



// 5

function* randomPassword() {
  const digits = '0123456789';
  while (true) {
      let password = '';
      for (let i = 0; i < 8; i++) {
          password += digits[Math.floor(Math.random() * digits.length)];
      }
      yield password;
  }
}

// გამოსაყენებლად:
const passwordGen = randomPassword();
console.log(passwordGen.next().value);  // 8-ციფრიანი პაროლი
console.log(passwordGen.next().value);  // სხვა 8-ციფრიანი პაროლი





// 6 (დავალებად არ გვქონია მაგრამ უფრო გავაუმჯობესე პაროლის გენერატორი)

function* enhancedPassword() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZაბგდევზთიკლმნოპრსტუფქღყშჩცძწჭხჯჰ0123456789!@#$%^&*()_+';
  while (true) {
      let password = '';
      for (let i = 0; i < 8; i++) {
          password += chars[Math.floor(Math.random() * chars.length)];
      }
      yield password;
  }
}

// გამოსაყენებლად:
const enhancedPassGen = enhancedPassword();
console.log(enhancedPassGen.next().value);  // 8 სიმბოლოსგან შექმნილი რთული პაროლი

// Object Literal:



// Part 1 - Creating an Object Literal

// Create an object literal called book with the following properties:
// title: "The Great Gatsby"
// author: "F. Scott Fitzgerald"
// year: 1925
// getSummary: A method that returns a string summarizing the book, e.g., "The Great Gatsby by F. Scott Fitzgerald, published in 1925."


// Part 2 -  Accessing and Modifying Properties

// Access and log the title and author of the book to the console.
// Change the year property to 2021 and log the updated year to the console.

// Part 3 - Using the Method

// Call the getSummary method and log the returned string to the console.


// ობიექტი ლიტერალური:



// ნაწილი 1 - ლიტერატურული ობიექტის შექმნა

// შექმენით ობიექტი, რომელსაც სიტყვასიტყვით ეწოდება წიგნი, შემდეგი თვისებებით:
// სათაური: "დიდი გეტსბი"
// ავტორი: "F. Scott Fitzgerald"
// წელი: 1925 წ
// getSummary: მეთოდი, რომელიც აბრუნებს წიგნის შემაჯამებელ სტრიქონს, მაგ., "დიდი გეტსბი ფ. სკოტ ფიცჯერალდის მიერ, გამოქვეყნებული 1925 წელს."


// ნაწილი 2 - თვისებების წვდომა და შეცვლა

// წვდომა და შეიტანეთ წიგნის სათაური და ავტორი კონსოლში.
// შეცვალეთ წლის თვისება 2021 წელს და შეიტანეთ განახლებული წელი კონსოლში.

// ნაწილი 3 - მეთოდის გამოყენება

// გამოიძახეთ getSummary მეთოდი და დაარეგისტრირეთ დაბრუნებული სტრიქონი კონსოლში



// ნაწილი 1 - ობიექტის ლიტერალის შექმნა
let book = {
    title: "დიდი გეტსბი",
    author: "ფ. სკოტ ფიცჯერალდი",
    year: 1925,
    getSummary: function() {
      return `${this.title} ავტორობით ${this.author}, გამოქვეყნდა ${this.year} წელს.`;
    }
  };
  
  // ნაწილი 2 - თვისებების წვდომა და შეცვლა
  console.log(`title: ${book.title}`);  // შედეგი: "დიდი გეტსბი"
  console.log(`author: ${book.author}`); // შედეგი: "ფ. სკოტ ფიცჯერალდი"
  
  book.year = 2021;
  console.log(`published in: ${book.year}`);   // შედეგი: 2021
  
  // ნაწილი 3 - მეთოდის გამოყენება
  console.log(book.getSummary());  // შედეგი: "დიდი გეტსბი ავტორობით ფ. სკოტ ფიცჯერალდი, გამოქვეყნდა 2021 წელს."


  // correct / uncorrect ?
  
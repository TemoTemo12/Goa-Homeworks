//Object Constructors:

// Creating an Object Constructor

// Part 1 - Define a constructor function called Book that takes title, author, and year as parameters and assigns them to the object.

// Add a method called getSummary to the Book prototype that returns a string summarizing the book, e.g., "Title by Author, published in Year."
// Creating Instances

// Part 2 - Use the Book constructor to create three instances:

// book1: "To Kill a Mockingbird" by Harper Lee, published in 1960.
// book2: "1984" by George Orwell, published in 1949.
// book3: "Moby Dick" by Herman Melville, published in 1851.
// Using the Instances

// Part 3 - Log the title and author of each book to the console.

// Call the getSummary method on each instance and log the returned strings to the console.








// ობიექტების კონსტრუქტორები:


// ობიექტის კონსტრუქტორის შექმნა

// ნაწილი 1 - განსაზღვრეთ კონსტრუქტორის ფუნქცია სახელწოდებით Book, რომელიც იღებს სათაურს, ავტორს და წელს პარამეტრებად და ანიჭებს მათ ობიექტს.

// დაამატეთ მეთოდი სახელწოდებით getSummary წიგნის პროტოტიპს, რომელიც აბრუნებს წიგნის შემაჯამებელ სტრიქონს, მაგ., „სათაური ავტორის მიხედვით, გამოქვეყნებულია წელიწადში“.
// ინსტანციების შექმნა

// ნაწილი 2 - გამოიყენეთ Book კონსტრუქტორი სამი ინსტანციის შესაქმნელად:

// წიგნი 1: "დამცინავი ფრინველის მოკვლა" ჰარპერ ლის, გამოცემული 1960 წელს.
// წიგნი2: ჯორჯ ორუელის "1984", გამოცემული 1949 წელს.
// წიგნი3: ჰერმან მელვილის "მობი დიკი", გამოქვეყნებული 1851 წელს.
// ინსტანციების გამოყენება

// ნაწილი 3 - ჩაწერეთ თითოეული წიგნის სათაური და ავტორი კონსოლში.

// გამოიძახეთ getSummary მეთოდი თითოეულ ინსტანციაზე და დაარეგისტრირეთ დაბრუნებული სტრიქონები კონსოლში

// წიგნის სათაურისა და ავტორის კონსოლში გამოტანა


//code:

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  Book.prototype.getSummary = function() {
    return `${this.title} ავტორის მიხედვით ${this.author}, გამოქვეყნებულია ${this.year} წელს.`;
  };

let book1 = new Book("დამცინავი ფრინველის მოკვლა", "ჰარპერ ლი", 1960);
let book2 = new Book("1984", "ჯორჯ ორუელი", 1949);
let book3 = new Book("მობი დიკი", "ჰერმან მელვილი", 1851);


console.log(book1.title);  // შედეგი: "დამცინავი ფრინველის მოკვლა"
console.log(book1.author); // შედეგი: "ჰარპერ ლი"

console.log(book2.title);  // შედეგი: "1984"
console.log(book2.author); // შედეგი: "ჯორჯ ორუელი"

console.log(book3.title);  // შედეგი: "მობი დიკი"
console.log(book3.author); // შედეგი: "ჰერმან მელვილი"

// გამოიძახეთ getSummary მეთოდი თითოეულ ინსტანციაზე და დაარეგისტრირეთ დაბრუნებული სტრიქონები კონსოლში

console.log(book1.getSummary()); // შედეგი: "დამცინავი ფრინველის მოკვლა ავტორის მიხედვით ჰარპერ ლი, გამოქვეყნებულია 1960 წელს."
console.log(book2.getSummary()); // შედეგი: "1984 ავტორის მიხედვით ჯორჯ ორუელი, გამოქვეყნებულია 1949 წელს."
console.log(book3.getSummary()); // შედეგი: "მობი დიკი ავტორის მიხედვით ჰერმან მელვილი, გამოქვეყნებულია 1851 წელს."


// correct / uncorrect ? 
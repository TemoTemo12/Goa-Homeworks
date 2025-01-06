// Object Constructor:


// შექმენით ობიექტი კონსტრუქტორი რომელსაც გადასცემთ 4 პარამეტრს: ფილმის სახელი, ფილმის ავტორი, ფილმის გამოშვების წელი და ფილმის შეფასება.

// ასევე ამ ობიექტში გადაეცით მეთოდი, პროგრამა ისე დაწერეთ, რომ კონსოლში თვითონ გამოიტანოს გადაცემული მნიშვნელობები  (ფილმის დასახელება)  - ის ავტორია (ფილმის ავტორი), ეს ფილმი გამოიშვა (გამოშვების წელი) და ამ ფილმს აქვს (შეფასება)'

// მეორე ეტაპი:

// ამ კონსტრუქტორიდან შექმენით 3 ობიექტი სადაც გადაეცემა მნიშვნელობები, შემდეგ ეს სამივე ობიექტი დააკონსოლეთ.


// მესამე ეტაპი:

// ინდივიდუალურად მიწვდით სახელს, ავტორს და გამოშვების წელს, ეს 3 თვისება გამოიტანეთ კონსოლში.


// მეოთხე ეტაპი:

// თითოეული ობიექტიდან გამოიძახეთ მეთოდი




// პირველი ეტაპი:

// ობიექტი კონსტრუქტორი
function Movie(title, director, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
    this.rating = rating;
    this.printDetails = function() { 
      console.log(`${this.title} - ის ავტორია ${this.director}, ეს ფილმი გამოიშვა ${this.releaseYear} და ამ ფილმს აქვს ${this.rating}`);
    };
  }
  
  // მეორე ეტაპი:
  
  // სამი ობიექტის შექმნა
  let movie1 = new Movie("Inception", "Christopher Nolan", 2010, 8.8);
  let movie2 = new Movie("The Matrix", "Lana and Lilly Wachowski", 1999, 8.7);
  let movie3 = new Movie("Interstellar", "Christopher Nolan", 2014, 8.6);
  
  // სამივე ობიექტის კონსოლში გამოტანა
  console.log(movie1);
  console.log(movie2);
  console.log(movie3);
  
  // მესამე ეტაპი:
  
  // ინდივიდუალურად მიწვდით თვისებებს და კონსოლში გამოტანა
  console.log(movie1.title);       // ფილმის სახელი
  console.log(movie1.director);    // ფილმის ავტორი
  console.log(movie1.releaseYear); // ფილმის გამოშვების წელი
  
  console.log(movie2.title);       // ფილმის სახელი
  console.log(movie2.director);    // ფილმის ავტორი
  console.log(movie2.releaseYear); // ფილმის გამოშვების წელი
  
  console.log(movie3.title);       // ფილმის სახელი
  console.log(movie3.director);    // ფილმის ავტორი
  console.log(movie3.releaseYear); // ფილმის გამოშვების წელი
  
  // მეოთხე ეტაპი:
  
  // თითოეული ობიექტიდან მეთოდის გამოძახება
  movie1.printDetails();
  movie2.printDetails();
  movie3.printDetails();



//   გამოვიძახე printDetails მეთოდი თითოეული ობიექტისთვის და დავაკონსოლე შედეგი.
//  printDetails === console.log()
  
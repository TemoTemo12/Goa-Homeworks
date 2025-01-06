// // Day 88


// 1)Create a Function to Display Current Date and Time

// Write a JavaScript function that creates a new Date object and returns the current date and time in the format: YYYY-MM-DD HH:MM:SS.
// Calculate the Difference Between Two Dates

// 2)Create a function that takes two date strings (in YYYY-MM-DD format) as input, converts them to Date objects, and returns the number of days between the two dates.
// Add Days to a Date

// 3)Write a function that accepts a date string and a number of days, then returns the new date after adding the specified number of days to the original date.
// Determine the Day of the Week

// 4)Create a function that takes a date string as input and returns the day of the week (e.g., "Monday", "Tuesday") for that date.
// Format a Date in Different Locales

// 5)Write a function that formats a given Date object in various locales (e.g., en-US, fr-FR, de-DE) and returns the date string in each locale format




// // Georgian


        // 1) შექმენით ფუნქცია მიმდინარე თარიღისა და დროის საჩვენებლად



                // function updateDateTime() {
                //     const now = new Date();
                //     const date = now.toLocaleDateString();
                //     const time = now.toLocaleTimeString();
                //     document.getElementById('datetime').textContent = `Date: ${date} | Time: ${time}`;
                // }

                // // დროის განახლება ყოველ წამში
                // setInterval(updateDateTime, 1000);

                // // ფუნქციის გამოძახება
                // updateDateTime();


// ##################################################################

        // დაწერეთ JavaScript ფუნქცია, რომელიც ქმნის ახალ თარიღის ობიექტს და აბრუნებს მიმდინარე თარიღს და დროს ფორმატში: წწწ-თმ-დდ თთ:თმ:სს.
        // გამოთვალეთ სხვაობა ორ თარიღს შორის


                //help!


// ##################################################################

        // 2) შექმენით ფუნქცია, რომელიც იღებს თარიღის ორ სტრიქონს (YYYY-MM-DD ფორმატში) შეყვანის სახით, გარდაქმნის მათ თარიღის ობიექტებად და აბრუნებს დღეების რაოდენობას ორ თარიღს შორის.
        // დაამატეთ დღეები თარიღს


                //help!


// ##################################################################

        // 3) დაწერეთ ფუნქცია, რომელიც მიიღებს თარიღის სტრიქონს და დღეების რაოდენობას, შემდეგ აბრუნებს ახალ თარიღს თავდაპირველ თარიღს დღეების მითითებული რაოდენობის დამატების შემდეგ.
        // განსაზღვრეთ კვირის დღე



                // function addDaysAndGetWeekday(dateString, days) {
                //     const date = new Date(dateString);
                //     date.setDate(date.getDate() + days);

                //     const year = date.getFullYear();
                //     const month = String(date.getMonth() + 1).padStart(2, '0');
                //     const day = String(date.getDate()).padStart(2, '0');

                //     const newDateString = `${year}-${month}-${day}`;

                //     const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                //     const weekday = weekdays[date.getDay()];

                //     return {
                //         newDate: newDateString,
                //         weekday: weekday
                //     };
                // }


                // let initialDate = "2024-08-01";
                // let daysToAdd = 5;

                // let result = addDaysAndGetWeekday(initialDate, daysToAdd);
                // console.log(`New date after adding ${daysToAdd} days to ${initialDate}: ${result.newDate}`);
                // console.log(`The weekday of the new date is: ${result.weekday}`);





// ##################################################################



        // 4) შექმენით ფუნქცია, რომელიც იღებს თარიღის სტრიქონს შეყვანად და აბრუნებს კვირის დღეს (მაგ., "ორშაბათი", "სამშაბათი") ამ თარიღისთვის.
        // თარიღის ფორმატირება სხვადასხვა ლოკალებში


  
                // function getWeekday(dateString, locale = 'ka-GE') {
                //     const date = new Date(dateString);

                    
                //     let weekday = date.toLocaleDateString(locale, { weekday: 'long' });

                //     return weekday;
                // }

                
                // let date1 = "2024-08-01";
                // let date2 = "2024-12-25";

                // console.log(`The weekday for ${date1} in Georgian: ${getWeekday(date1)}`);
                // console.log(`The weekday for ${date1} in English: ${getWeekday(date1)}`);
                // console.log(`The weekday for ${date2} in Georgian: ${getWeekday(date2)}`);
                // console.log(`The weekday for ${date2} in English: ${getWeekday(date2)}`);




// ##################################################################

        // 5) დაწერეთ ფუნქცია, რომელიც აფორმებს მოცემულ თარიღის ობიექტს სხვადასხვა ლოკალებში (მაგ., en-US, fr-FR, de-DE) და აბრუნებს თარიღის სტრიქონს თითოეულ ლოკალურ ფორმატში.


            //help!


// ##################################################################


//  Corrects:      3/5
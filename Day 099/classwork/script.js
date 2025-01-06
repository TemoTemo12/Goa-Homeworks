// // // 1)  შექმენით arry რომელიც იქ ნება მაქსიმუმ 10 ელემენტიანანი იყოს გამოერებული მინიმუმ 4 ელემენტი
// // // 2) გამოვიყენოთ  new Set  და დავატოვოთ თითო ელემენტი ამ სეტში
// // // 3) დავამატოთ სეტში აიეემები
// // // 4) გამოვაკლოთ აითემები
// // // 5) გავიგოთ შეიცავს თუ არა ამ  ელემენტს ჩვენი array


// // // 1. შექმენით array რომელიც მაქსიმუმ 10 ელემენტიანია და გამოირჩეოდეს მინიმუმ 4 ელემენტი
// // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // // 2. გამოვიყენოთ new Set და დავატოვოთ თითო ელემენტი ამ სეტში
// // let set = new Set(array);
// // console.log("Initial Set:", set);

// // // 3. დავამატოთ სეტში ახალი ელემენტები
// // set.add(11);
// // set.add(12);
// // console.log("Set after adding elements:", set);

// // // 4. გამოვაკლოთ აითემები
// // set.delete(11);
// // set.delete(12);
// // console.log("Set after removing elements:", set);

// // // 5. გავიგოთ შეიცავს თუ არა ელემენტს ჩვენი array
// // console.log("Does the set contain 5?", set.has(5));
// // console.log("Does the set contain 11?", set.has(11));



// // //   1)  შექმენით arry Map ში ჰოქნდეს დაწყვილებული ელმენტები ისე რომ იყოს სულ მთლიან ჯამში სიგრძე 5
// // // 2) გამოვიყენოთ  new Map და დავატოვოთ თითო ელემენტი ამ სეტში
// // // 3) დავამატოთ set method  ით items
// // // 4) გამოვაკლოთ აითემები
// // // 5) გავიგოთ შეიცავს თუ არა ამ  ელემენტს ჩვენი map
// // // 6) საბოლოოდ დავპრინოთ ოროგრც ობიექტი 


// // // 1. შექმენით Map და წყვილი ელემენტებით ისე, რომ სიგრძე იყოს 5
// // let map = new Map([
// //     ['key1', 'value1'],
// //     ['key2', 'value2'],
// //     ['key3', 'value3'],
// //     ['key4', 'value4'],
// //     ['key5', 'value5']
// //   ]);
  
// //   // 2. გამოვიყენოთ new Map და დავატოვოთ თითო ელემენტი ამ სეტში
// //   console.log("Initial Map:", map);
  
// //   // 3. დავამატოთ Map-ში ახალი ელემენტები
// //   map.set('key6', 'value6');
// //   map.set('key7', 'value7');
// //   console.log("Map after adding elements:", map);
  
// //   // 4. გამოვაკლოთ ელემენტები
// //   map.delete('key6');
// //   map.delete('key7');
// //   console.log("Map after removing elements:", map);
  
// //   // 5. გავიგოთ შეიცავს თუ არა ელემენტს ჩვენი Map
// //   console.log("Does the map contain 'key3'?", map.has('key3'));
// //   console.log("Does the map contain 'key6'?", map.has('key6'));
  
// //   // 6. საბოლოოდ დავპრინოთ ობიექტი
// //   console.log("Final Map object:", map);








// // //   1)  შექმენით arry რომელიც იქ ნება მაქსიმუმ 10 ელემენტიანანი იყოს გამოერებული მინიმუმ 4 ელემენტი

// // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // მაქსიმუმ 10 ელემენტი


// // // 2) გამოვიყენოთ  new Set  და დავატოვოთ თითო ელემენტი ამ სეტში

// // let set = new Set(array);
// // console.log(set);


// // // 3) დავამატოთ სეტში აიეემები

// // set.add(11); // დაამატეთ ახალი ელემენტი
// // set.add(12); // დაამატეთ კიდევ ერთი ახალი ელემენტი
// // console.log(set);


// // // 4) გამოვაკლოთ აითემები

// // set.delete(11); // წაშლა ელემენტი 11
// // set.delete(12); // წაშლა ელემენტი 12
// // console.log(set);


// // // 5) გავიგოთ შეიცავს თუ არა ამ  ელემენტს ჩვენი array

// // let contains = set.has(5); // შეამოწმე ელემენტი 5
// // console.log(contains); // true თუ შეიცავს, წინააღმდეგ შემთხვევაში false





// // 1) შექმენით array, რომელიც შეიცავს მინიმუმ 4, მაქსიმუმ 10 ელემენტს
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // 2) გამოვიყენოთ new Set და დავტოვოთ თითო ელემენტი სეტში
// let uniqueSet = new Set(arr); // Set ავტომატურად გამორიცხავს დუბლირებულ ელემენტებს

// console.log("Set:", uniqueSet);

// // 3) დავამატოთ სეტში აიტემები
// uniqueSet.add(11);
// uniqueSet.add(12);

// console.log("Set after adding items:", uniqueSet);

// // 4) გამოვაკლოთ აიტემები
// uniqueSet.delete(1);
// uniqueSet.delete(2);

// console.log("Set after deleting items:", uniqueSet);

// // 5) გავიგოთ, შეიცავს თუ არა სეტი კონკრეტულ ელემენტს ჩვენი array-დან
// let contains = uniqueSet.has(5); // ამოწმებს, არის თუ არა 5 სეტში
// console.log("Does the set contain 5?", contains);

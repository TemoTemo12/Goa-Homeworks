const arr = ['apple', 'banana', 'orange', 'grape', 'peach'];

// map
const mappedArr = arr.map(item => item + ' fruit');
console.log('Mapped Array:', mappedArr);

// filter
const filteredArr = arr.filter(item => item.startsWith('a'));
console.log('Filtered Array:', filteredArr);

// find
const foundItem = arr.find(item => item === 'grape');
console.log('Found Item:', foundItem);

// findIndex
const foundIndex = arr.findIndex(item => item === 'orange');
console.log('Found Index:', foundIndex);

// join
const joinedArr = arr.join(', ');
console.log('Joined Array:', joinedArr);

// indexOf
const indexOfItem = arr.indexOf('peach');
console.log('Index of Peach:', indexOfItem);

// startsWith
const startsWithA = arr[0].startsWith('a');
console.log('Starts with "a":', startsWithA);

// endsWith
const endsWithA = arr[1].endsWith('a');
console.log('Ends with "a":', endsWithA);

// includes
const includesOrange = arr.includes('orange');
console.log('Includes "orange":', includesOrange);

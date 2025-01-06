function filterArrays(...arrays) {
    return arrays.map(array => array.filter(item => item)); 
}

const filteredArrays = filterArrays(
    [1, 0, 2, 3, false, 4],
    [false, "Hello", "", null, "World"],
    [undefined, 5, 6, "", 7]
);

console.log(filteredArrays);

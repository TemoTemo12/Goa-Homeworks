let largeObject = {};

for (let i = 0; i < 50; i++) {
  largeObject[`id${i}`] = null;        // Placeholder value
  largeObject[`name${i}`] = null;      // Placeholder value
  largeObject[`email${i}`] = null;     // Placeholder value
}

console.log(largeObject);

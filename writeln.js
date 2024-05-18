const currentDate = () => new Date().toLocaleDateString('en-US');
const stringReverse = str => str.split("").reverse().join("");
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
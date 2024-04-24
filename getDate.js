const getRandomBoolean = () => Math.random() >= 0.5;
var pattern = {};
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const minNumber = arr => Math.min(...arr);
const arrayContains = (arr, element) => arr.includes(element);
const timeFromDate = date => date.toTimeString().slice(0, 8);
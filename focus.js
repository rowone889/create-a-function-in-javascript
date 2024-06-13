const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const updated = numbers.filter(element => element > 6);
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
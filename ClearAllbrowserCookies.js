const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const resultingPromises = urls.map((url) => makHttpRequest(url));
const isEven = (num) => num % 2 === 0;
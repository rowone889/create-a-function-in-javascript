const resultingPromises = urls.map((url) => makHttpRequest(url));
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
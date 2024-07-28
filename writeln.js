const results = await Promise.all(resultingPromises);
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
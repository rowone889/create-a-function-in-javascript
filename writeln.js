const allResults = await Promise.all(items.map(async (item) => {}));
const result = await makeHttpRequest(url);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
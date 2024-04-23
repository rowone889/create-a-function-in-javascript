const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const result = await makeHttpRequest(url);
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
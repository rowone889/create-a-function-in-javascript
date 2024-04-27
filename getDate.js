const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
console.log(typeof typeof 1);
const repositoryRootPath = path.resolve(__dirname, '..');
const stringReverse = str => str.split("").reverse().join("");
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const maxNumber = arr => Math.max(...arr);
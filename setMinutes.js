const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const intermediateAppPath = path.join(buildOutputPath, 'app');
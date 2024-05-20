const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
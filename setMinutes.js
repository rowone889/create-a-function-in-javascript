const merge = [...new Set(a.concat(b))];
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
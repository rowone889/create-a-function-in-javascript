const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const updated = numbers.filter(element => element > 6);
const randomBoolean = () => Math.random() >= 0.5;
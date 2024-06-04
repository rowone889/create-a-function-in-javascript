var regexp  = new RegExp('{{([^}]+)}}', 'g');
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
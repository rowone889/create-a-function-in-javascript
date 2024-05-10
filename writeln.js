var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const merge = Object.assign({}, obj1, obj2);
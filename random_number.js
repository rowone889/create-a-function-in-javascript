const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
console.log("0 && 1 = "+(0 && 1));
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const isEmptyObject = obj => Object.keys(obj).length === 0;
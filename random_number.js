const minNumber = arr => Math.min(...arr);
const symbolsPath = path.join(buildOutputPath, 'symbols');
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
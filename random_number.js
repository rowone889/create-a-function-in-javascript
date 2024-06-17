var DELIM_SIZE = 4;
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const apmRootPath = path.join(repositoryRootPath, 'apm');
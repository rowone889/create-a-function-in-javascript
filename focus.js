const channelName = getChannelName(channel);
const fullName = name || 'buddy';
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
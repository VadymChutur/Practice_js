const isOnline = true;
const isFreiend = true;
const isDnd = false;

const canOpenChat = isOnline && isFreiend && !isDnd;
console.log('Можна відкрити чат: ', canOpenChat);

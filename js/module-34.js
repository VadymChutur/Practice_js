const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

console.table(friends);

for (const friend of friends) {
  console.log(friend);

  friend.gaming = true;
}

console.table(friends);

const findFriendByName = function (allFriends, name) {
  for (const friend of friends) {
    console.log(friend.name);
    if (friend.name === name) {
      return `Знайден друг ${friend.name}`;
    }
  }

  return `Такого друга немає ${name}`;
};

console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy'));

const getAllNames = function (allFriends) {
  const allNames = [];
  for (const friend of allFriends) {
    allNames.push(friend.name);
  }
  return allNames;
};

console.log(getAllNames(friends));

const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];

  for (const friend of friends) {
    if (friend.online) {
      onlineFriends.push(friend);
    }
  }

  return onlineFriends;
};

console.log(getOnlineFriends(friends));

const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];

  for (const friend of friends) {
    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }

  return offlineFriends;
};

console.log(getOfflineFriends(friends));

const getFriendsByOnlineStatus = function (allFriends) {
  const onlineStatusByOnline = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    if (friend.online) {
      onlineStatusByOnline.online.push(friend);
      continue;
    }
    onlineStatusByOnline.offline.push(friend);
  }

  return onlineStatusByOnline;
};

console.log(getFriendsByOnlineStatus(friends));

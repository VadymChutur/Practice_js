const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];

// console.log(array.flat(3));

const tweets = [
  { id: '001', likes: 5, tags: ['js', 'nodejs'] },
  { id: '002', likes: 2, tags: ['html', 'css'] },
  { id: '003', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '004', likes: 8, tags: ['css', 'react'] },
  { id: '005', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);
const allTagsMap = tweets.map((t) => t.tags).flat();
const allTagsFlatMap = tweets.flatMap((t) => t.tags);

console.log(allTags);
console.log(allTagsMap);
console.log(allTagsFlatMap);

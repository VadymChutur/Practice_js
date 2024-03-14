const playlist = {
  name: 'Мій плейліст',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  //   trackCount: 3,
  //   getName: function () {
  //     console.log('Це метод');
  //   },
  //   getName() {
  //     console.log('Це новий синтаксис методу');
  //   },

  changeName(newName) {
    this.name = newName;
  },

  addTrack(track) {
    this.tracks.push(track);
    // this.trackCount = this.tracks.length;
  },

  updateRating(newReiting) {
    this.rating = newReiting;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

// playlist.getName();

console.log(playlist.getTrackCount());
playlist.changeName('Супер крутий плейліст');
playlist.addTrack('трек-4');
playlist.addTrack('трек-5');
playlist.addTrack('трек-6');
playlist.addTrack('трек-7');
playlist.updateRating(10);
console.log(playlist.getTrackCount());

console.log(playlist);

class Playlist {
  constructor(capacity) {
    this.capacity = capacity;
    this.songs = [];
  }

  addSong(song) {
    if (this.songs.length >= this.capacity) {
      this.songs.shift();
    }
    this.songs.push(song);
  }

  displaySongs() {
    console.log("Playlist:");
    for (let i = 0; i < this.songs.length; i++) {
      console.log(`${i + 1}. ${this.songs[i]}`);
    }
  }

  assert(condition, message) {
    if (!condition) {
      console.error(`Assertion failed: ${message}`);
    }
  }
}

const myPlaylist = new Playlist(3);
myPlaylist.addSong("S1");
myPlaylist.addSong("S2");
myPlaylist.addSong("S3");

//When S4 song is played -> S2,S3,S4
myPlaylist.assert(myPlaylist.songs.length === 3, "S4 is not added");
myPlaylist.addSong("S4");
myPlaylist.displaySongs();
myPlaylist.assert(myPlaylist.songs.length === 3, "S4 is added");


//When S2 song is played -> S3,S4,S2
myPlaylist.assert(myPlaylist.songs.length === 3, "S2 is not added");
myPlaylist.addSong("S2");
myPlaylist.displaySongs();
myPlaylist.assert(myPlaylist.songs.length === 3, "S2 is added");

//When S1 song is played -> S4,S2,S1
myPlaylist.assert(myPlaylist.songs.length === 3, "S1 is not added");
myPlaylist.addSong("S1");
myPlaylist.displaySongs();
myPlaylist.assert(myPlaylist.songs.length === 3, "S1 is added");
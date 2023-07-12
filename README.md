Assignment 

Created class with constractor and declared the array, writen the function for adding the songs, 
addSongs() funtion will remove the frist song form the array if the capacity is exceded. if it not exceded then song will be added to the array,
displaySong() function will be display the song that is presant in the array one bye one. by itarating for loop.
By creating instance i am fixing the array Capacity by passing the argument.


Here i am adding the songs using addSong() function that created above.
myPlaylist.addSong("S1");
myPlaylist.addSong("S2");
myPlaylist.addSong("S3");

When S4 song is added,then out put is -> S2,S3,S4
myPlaylist.addSong("S4");
myPlaylist.displaySongs();

When S2 song is added,then out put is -> S3,S4,S2
myPlaylist.addSong("S2");
myPlaylist.displaySongs();

When S1 song is added,then out put is -> S4,S2,S1
myPlaylist.addSong("S1");
myPlaylist.displaySongs();

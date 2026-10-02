const mySong = {
    title: "After Hours",
    artist: "The Weeknd",
    numStreams: 1201201202,
    credits: {
        producer: "The Weeknd",
        writer: "The Weeknd",
    },
};
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
console.log(calculatePayout(mySong));
function printSong(song) {
    return `${song.title} - ${song.artist}`;
}
console.log(printSong(mySong));
export {};

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

const mySong: Song = {
  title: "After Hours",
  artist: "The Weeknd",
  numStreams: 1201201202,
  credits: {
    producer: "The Weeknd",
    writer: "The Weeknd",
  },
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

console.log(calculatePayout(mySong));

function printSong(song: Song): string {
  return `${song.title} - ${song.artist}`;
}

console.log(printSong(mySong));

export {};

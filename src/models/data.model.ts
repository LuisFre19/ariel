export interface Track {
  name: string;
  artist: string;
  albumArtUrl: string;
}

export interface Artist {
  name: string;
  imageUrl: string;
  genre: string;
}

export interface AudioFeatures {
  danceability: number;
  energy: number;
  valence: number;
  acousticness: number;
  instrumentalness: number;
  liveness: number;
  speechiness: number;
}

export interface SpotifyData {
  tracks: Track[];
  artists: Artist[];
  audioFeatures: AudioFeatures;
}

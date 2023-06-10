export interface ImageSong {
  id: string;
  image: string;
  song: string;
}

export interface Model {
  artist: string;
  image: string;
  rate: number;
  language?: string;
  color: string;
}

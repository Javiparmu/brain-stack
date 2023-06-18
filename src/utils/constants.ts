import { ImageSong, Model } from './interfaces';

export const moods = [
  'happy',
  'sad',
  'angry',
  'relaxed',
  'energetic',
  'romantic',
  'nostalgic',
  'excited',
  'calm',
  'bored',
  'tired',
  'lonely',
  'depressed',
  'anxious',
  'confused',
  'frustrated',
  'stressed',
  'motivated',
  'inspired',
  'hopeful',
  'optimistic',
  'peaceful',
  'content',
  'proud',
  'grateful',
  'loved',
  'joyful',
  'cheerful',
  'playful',
  'silly',
  'satisfied',
  'sick',
  'hungry',
  'thirsty',
];

export const genres = [
  'pop',
  'rock',
  'hip-hop',
  'rap',
  'r&b',
  'country',
  'edm',
  'jazz',
  'blues',
  'classical',
  'reggae',
  'metal',
  'punk',
  'folk',
  'soul',
  'indie',
  'latin',
  'disco',
  'funk',
  'techno',
  'house',
  'trance',
  'dubstep',
  'drum and bass',
  'hardcore',
  'hardstyle',
  'hard rock',
  'soft rock',
  'alternative',
  'grunge',
  'ska',
  'reggaeton',
  'bedroom pop',
  'nightcore',
  'k-pop',
];

export const instruments = [
  'piano',
  'guitar',
  'drums',
  'bass',
  'violin',
  'cello',
  'flute',
  'trumpet',
  'saxophone',
  'trombone',
  'clarinet',
  'tuba',
  'xylophone',
  'marimba',
  'vibraphone',
  'bassoon',
  'oboe',
  'harp',
  'accordion',
  'banjo',
  'ukulele',
  'mandolin',
  'harmonica',
  'synthesizer',
  'electric guitar',
  'acoustic guitar',
  'electric bass',
  'acoustic bass',
  'viola',
  'double bass',
  'tambourine',
  'triangle',
  'cowbell',
  'bongos',
  'congas',
  'timpani',
];

export const categoryOptions = {
  genre: genres,
  mood: moods,
  instrument: instruments,
};

export const masonryImages = [
  'https://images.unsplash.com/photo-1585085007341-a5aadf6e48e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
  'https://images.unsplash.com/photo-1556804335-2fa563e93aae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
  'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://plus.unsplash.com/premium_photo-1680527465438-ccd9026013f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
];

export const masonryItems: ImageSong[] = [
  {
    id: '1',
    image: masonryImages[0],
    song: 'https://music-ai-songs.s3.eu-south-2.amazonaws.com/Milo+j+-+Rara+Vez.mp3',
  },
  {
    id: '2',
    image: masonryImages[1],
    song: 'https://music-ai-songs.s3.eu-south-2.amazonaws.com/Milo+j+-+Rara+Vez.mp3',
  },
  {
    id: '3',
    image: masonryImages[2],
    song: 'https://music-ai-songs.s3.eu-south-2.amazonaws.com/Milo+j+-+Rara+Vez.mp3',
  },
  {
    id: '4',
    image: masonryImages[3],
    song: 'https://music-ai-songs.s3.eu-south-2.amazonaws.com/Milo+j+-+Rara+Vez.mp3',
  },
  {
    id: '5',
    image: masonryImages[4],
    song: 'https://music-ai-songs.s3.eu-south-2.amazonaws.com/Milo+j+-+Rara+Vez.mp3',
  },
  {
    id: '6',
    image: masonryImages[5],
    song: 'https://music-ai-songs.s3.eu-south-2.amazonaws.com/Milo+j+-+Rara+Vez.mp3',
  },
  {
    id: '7',
    image: masonryImages[6],
    song: 'https://music-ai-songs.s3.eu-south-2.amazonaws.com/Milo+j+-+Rara+Vez.mp3',
  },
  {
    id: '8',
    image: masonryImages[7],
    song: 'https://music-ai-songs.s3.eu-south-2.amazonaws.com/Milo+j+-+Rara+Vez.mp3',
  },
  {
    id: '9',
    image: masonryImages[8],
    song: 'https://music-ai-songs.s3.eu-south-2.amazonaws.com/Milo+j+-+Rara+Vez.mp3',
  },
];

export const modelList: Model[] = [
  {
    artist: 'Adele',
    image: '/images/artists/adele.png',
    rate: 4.5,
    color: '#101419',
  },
  {
    artist: 'Rihanna',
    image: '/images/artists/rihanna.png',
    rate: 4.5,
    color: '#0795C3',
  },
  {
    artist: 'Rosalia',
    image: '/images/artists/rosalia.png',
    rate: 4,
    color: '#593BC3',
  },
  {
    artist: 'Bruno Mars',
    image: '/images/artists/bruno-mars.png',
    rate: 5,
    color: '#222927',
  },
  {
    artist: 'Homer Simpson',
    image: '/images/artists/homer-simpson.png',
    rate: 3,
    language: 'es-latam',
    color: '#ffffff',
  },
  {
    artist: 'Miley Cyrus',
    image: '/images/artists/miley-cyrus.png',
    rate: 4,
    color: '#222927',
  },
];

export const pricingData = [
  {
    plan: 'Basic',
    features: [
      {
        available: true,
        text: '5 songs per month',
      },
      {
        available: true,
        text: 'List of your songs',
      },
      {
        available: false,
        text: 'Regenerate your songs',
      },
      {
        available: false,
        text: 'Recommended inputs',
      },
    ],
    price: 4.95,
  },
  {
    plan: 'Standard',
    features: [
      {
        available: true,
        text: '12 songs per month',
      },
      {
        available: true,
        text: 'List of your songs',
      },
      {
        available: true,
        text: 'Regenerate your songs',
      },
      {
        available: false,
        text: 'Recommended inputs',
      },
    ],
    price: 9.95,
  },
  {
    plan: 'Premium',
    features: [
      {
        available: true,
        text: '30 songs per month',
      },
      {
        available: true,
        text: 'List of your songs',
      },
      {
        available: true,
        text: 'Regenerate your songs',
      },
      {
        available: true,
        text: 'Recommended inputs',
      },
    ],
    price: 19.95,
  },
];

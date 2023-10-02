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

export const exampleMessages = [
  {
    role: 'user',
    content: 'Cuéntame la historia de Mulan',
  },
  {
    role: 'bot',
    content:
      'La historia de Mulan es una leyenda china que ha sido adaptada en varias ocasiones en películas, obras de teatro y libros. La trama se desarrolla en la antigua China, durante la Dinastía Han. La protagonista es Hua Mulan, una joven que vive con su familia. Su padre, al ser llamado a filas para unirse al ejército para luchar contra los invasores, está enfermo y no puede servir. Mulan, decidida a evitar que su padre se convierta en un soldado en su estado de salud, decide tomar su lugar disfrazándose como hombre y haciéndose pasar por él. Bajo la identidad de Hua Jun, Mulan se une al ejército y se somete a un entrenamiento riguroso. A pesar de las dificultades y los desafíos, Mulan demuestra ser habilidosa y valiente. Durante su tiempo en el ejército, Mulan entabla amistades y demuestra su valía en varias situaciones de combate. Sin embargo, su secreto se ve amenazado cuando se enamora del capitán Li Shang y comienzan a surgir sentimientos mutuos. A su vez, el ejército debe enfrentarse a una peligrosa invasión liderada por los Hunos, encabezados por el temible Shan Yu. Finalmente, Mulan y su ejército logran derrotar a los Hunos, pero su identidad de mujer es descubierta. A pesar de ello, el emperador reconoce el coraje y la valentía de Mulan y le otorga la más alta distinción. Mulan regresa a casa, donde su fe en sí misma y su sacrificio son finalmente reconocidos por su familia. La historia de Mulan resalta el valor, la valentía y la determinación de una joven que desafía los estereotipos de género y arriesga su vida para proteger a su familia y a su país. Su historia ha sido admirada y celebrada por su espíritu rebelde y su mensaje sobre la igualdad y el empoderamiento de las mujeres.',
  },
  {
    role: 'user',
    content: 'Pop',
  },
  {
    role: 'bot',
    content: 'What mood do you want?',
  },
];

export const exampleImages = [
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-eNiKr8ctL9BJad0YGtLUW02E/user-Fu7leHMQFhfjcPfPHJFaiTFJ/img-Fp9vF1zsKyV7EoduRPN75jB3.png?st=2023-08-23T18%3A01%3A13Z&se=2023-08-23T20%3A01%3A13Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-08-23T18%3A56%3A05Z&ske=2023-08-24T18%3A56%3A05Z&sks=b&skv=2021-08-06&sig=FsnfFOWiIywn8ZbxILG65Jdpsm73E1/YKAFV%2BhKtcIg%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-eNiKr8ctL9BJad0YGtLUW02E/user-Fu7leHMQFhfjcPfPHJFaiTFJ/img-63TQ7nTsR36eMp5V9dYBRLul.png?st=2023-08-23T18%3A01%3A13Z&se=2023-08-23T20%3A01%3A13Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-08-23T18%3A56%3A05Z&ske=2023-08-24T18%3A56%3A05Z&sks=b&skv=2021-08-06&sig=uU8PMxvaaD8AApU0I8MgAy006UKqR0kvFPontQ/BsAo%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-eNiKr8ctL9BJad0YGtLUW02E/user-Fu7leHMQFhfjcPfPHJFaiTFJ/img-8f2jIloom6C3rJDoKXfzFdYa.png?st=2023-08-23T18%3A01%3A13Z&se=2023-08-23T20%3A01%3A13Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-08-23T18%3A56%3A05Z&ske=2023-08-24T18%3A56%3A05Z&sks=b&skv=2021-08-06&sig=1yNRsR5JqOy9loh330LUGXeEHbebA%2BTOod9/t/cfGfQ%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-eNiKr8ctL9BJad0YGtLUW02E/user-Fu7leHMQFhfjcPfPHJFaiTFJ/img-HOWCF81KFpfmuTYox8YzRxpl.png?st=2023-08-23T18%3A01%3A13Z&se=2023-08-23T20%3A01%3A13Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-08-23T18%3A56%3A05Z&ske=2023-08-24T18%3A56%3A05Z&sks=b&skv=2021-08-06&sig=U9eIDxT19ozIQ4eHyrtAZOjzDvnKP55y2Y8KYutzzvI%3D',
];

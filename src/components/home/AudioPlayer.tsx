import styles from '@/styles/Home.module.css';
import { FC, useEffect, useRef, useState } from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

interface AudioPlayerProps {
  song: string;
}

export const AudioPlayer: FC<AudioPlayerProps> = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.volume = 0.05;
    }
  }, [isPlaying]);

  const playSong = () => {
    setIsPlaying(true);
  };

  const pauseSong = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <button
        className={styles.playButton + `${isPlaying ? ' pause' : ' play'}`}
        onClick={() => (isPlaying ? pauseSong() : playSong())}
      >
        {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
      </button>
      {isPlaying && (
        <audio
          ref={audioRef}
          src={song}
          autoPlay
          onEnded={() => setIsPlaying(false)}
        />
      )}
    </>
  );
};

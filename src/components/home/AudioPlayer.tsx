import { IconButton } from '@chakra-ui/react';
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
      <IconButton
        aria-label="play_button"
        icon={isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
        colorScheme="blackAlpha"
        onClick={() => (isPlaying ? pauseSong() : playSong())}
        bgColor={'transparent'}
        _hover={{ bgColor: 'transparent', opacity: 0.8 }}
      />
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

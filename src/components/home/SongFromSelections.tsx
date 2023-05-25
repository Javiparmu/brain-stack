import {
  Box,
  Button,
  Fade,
  Select,
} from '@chakra-ui/react';
import { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useAppSelector } from '../../store/hooks';
import { selectCurrentUser } from '../../redux/auth/authSlice';
import { useCreateSongMutation } from '../../redux/endpoints/song';
import { HomeStyles as styles } from '../../styles/HomeStyles';
import { MdArrowDropDown } from 'react-icons/md';
import {
  genres,
  instruments,
  moods,
} from '../../utils/constants';

export const SongFromSelections = () => {
  const [generateInput] = useState<string>('');
  const user = useAppSelector(selectCurrentUser);

  const [createSong, { data: song, isLoading }] =
    useCreateSongMutation();

  const onGenerateSong = async () => {
    if (generateInput !== '' && user) {
      createSong({
        title: 'mercho',
        url: 'https://music-ai-s3.s3.eu-south-2.amazonaws.com/songs/mercho.mp3',
        input: generateInput,
        userId: user?._id || '',
      });
    } else {
      alert('Please enter a valid input');
    }
  };

  return (
    <>
      <Box sx={styles.createSongInputContainer}>
        <Box
          sx={{
            width: '30vw',
            minWidth: '200px',
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
          }}
        >
          <Select
            icon={<MdArrowDropDown />}
            placeholder="Genre"
            bgColor={'white'}
            height="50px"
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </Select>
          <Select
            icon={<MdArrowDropDown />}
            placeholder="Mood"
            bgColor={'white'}
            height="50px"
          >
            {moods.map((mood) => (
              <option key={mood} value={mood}>
                {mood}
              </option>
            ))}
          </Select>
          <Select
            icon={<MdArrowDropDown />}
            placeholder="Instrument"
            bgColor={'white'}
            height="50px"
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
          >
            {instruments.map((instrument) => (
              <option key={instrument} value={instrument}>
                {instrument}
              </option>
            ))}
          </Select>
        </Box>
        <Button
          variant="outlined"
          onClick={onGenerateSong}
          style={{
            ...styles.createSongInputButton,

            textTransform: 'capitalize',
          }}
        >
          Generate
        </Button>
      </Box>
      {isLoading ? (
        <Box
          sx={{
            marginTop: '40px',
          }}
        >
          <img
            src="/images/loading.svg"
            alt="loading"
            width="50"
            height="50"
          />
        </Box>
      ) : (
        <Fade
          in={!!song}
          style={{
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <Box sx={styles.audioPlayerContainer}>
            {song?.result ? (
              <ReactAudioPlayer
                src={song?.result?.url || ''}
                controls
                volume={0.3}
                style={{
                  width: '330px',
                  maxWidth: '100%',
                }}
                controlsList="nodownload"
                title="Nochentera"
              />
            ) : null}
          </Box>
        </Fade>
      )}
    </>
  );
};

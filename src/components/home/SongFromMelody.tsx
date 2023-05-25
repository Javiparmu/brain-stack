import { Box, Button, Fade } from '@chakra-ui/react';
import { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useAppSelector } from '../../store/hooks';
import { selectCurrentUser } from '../../redux/auth/authSlice';
import { useCreateSongMutation } from '../../redux/endpoints/song';
import { HomeStyles as styles } from '../../styles/HomeStyles';
import FileUpload from '../FileUpload';
import { useForm } from 'react-hook-form';

export const SongFromMelody = (): JSX.Element => {
  const [generateInput] = useState<string>('');
  const user = useAppSelector(selectCurrentUser);

  const [createSong, { data: song, isLoading }] =
    useCreateSongMutation();

  const { control } = useForm({
    defaultValues: {
      melody: '',
    },
  });

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
        <FileUpload
          style={{ width: '30vw', minWidth: '200px' }}
          name="melody"
          placeholder="Upload your melody"
          acceptedFileTypes="audio/*"
          control={control}
          isRequired
        />
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

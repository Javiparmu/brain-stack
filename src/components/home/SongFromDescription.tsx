import {
  baseTheme,
  Box,
  Button,
  Fade,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';
import { FC, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useAppSelector } from '../../store/hooks';
import theme from '../../theme/theme';
import { selectCurrentUser } from '../../redux/auth/authSlice';
import { useCreateSongMutation } from '../../redux/endpoints/song';
import { HomeStyles as styles } from '../../styles/HomeStyles';

export const SongFromDescription: FC = () => {
  const [generateInput, setGenerateInput] =
    useState<string>('');
  const user = useAppSelector(selectCurrentUser);

  const [createSong, { data: song, isLoading }] =
    useCreateSongMutation();

  const onGenerateInputChange = (e: any) => {
    setGenerateInput(
      e.target.value.charAt(0).toUpperCase() +
        e.target.value.slice(1),
    );
  };

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

  const placeHolderColor = useColorModeValue(
    baseTheme.colors.gray[500],
    baseTheme.colors.gray[500],
  );

  const bgColor = useColorModeValue(
    '#FFFFFF',
    theme.colors.primaryFontColor.darkMode,
  );
  return (
    <>
      <Box sx={styles.createSongInputContainer}>
        <Input
          size="lg"
          placeholder="Input your song description"
          _placeholder={{
            color: placeHolderColor,
          }}
          textColor={
            theme.colors.primaryFontColor.lightMode
          }
          variant="outlined"
          value={generateInput}
          onChange={onGenerateInputChange}
          bgColor={bgColor}
          style={styles.createSongInput}
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

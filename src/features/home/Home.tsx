import ReactAudioPlayer from 'react-audio-player'
import { HomeStyles as styles } from '../../styles/HomeStyles'
import { useState } from 'react'
import { useCreateSongMutation } from '../endpoints/song'
import { useEffect } from 'react'
import {
  baseTheme,
  Box,
  Button,
  Fade,
  GridItem,
  Input,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import theme from '../../theme/theme'
import { useAppSelector } from '../../app/hooks'
import { selectCurrentUser } from '../auth/authSlice'

export const Home = () => {
  const [generateInput, setGenerateInput] =
    useState<string>('')
  const [song, setSong] = useState<string | null>(null)
  const user = useAppSelector(selectCurrentUser)

  const [createSong, { isLoading }] =
    useCreateSongMutation()

  const onGenerateInputChange = (e: any) => {
    setGenerateInput(
      e.target.value.charAt(0).toUpperCase() +
        e.target.value.slice(1),
    )
  }

  const onGenerateSong = async () => {
    if (generateInput !== '' && user) {
      const response = await createSong({
        title: 'mercho',
        url: 'https://music-ai-s3.s3.eu-south-2.amazonaws.com/songs/mercho.mp3',
        input: generateInput,
        userId: user?._id || '',
      })
      if ('data' in response)
        setSong(response.data?.result.url)
    } else {
      alert('Please enter a valid input')
    }
  }

  return (
    <Box>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        columnGap={300}
        rowGap={50}
        marginTop="8vh"
        pl={{ base: '8vw', md: '16vw' }}
        pr={{ base: '8vw', md: '16vw' }}>
        <GridItem>
          <Text
            textAlign={{ base: 'center', md: 'left' }}
            fontSize={{ base: 36, md: 48 }}
            style={{
              fontWeight: '700',
            }}>
            The easiest way to create your own music.
          </Text>
        </GridItem>
        <GridItem>
          <Box sx={styles.astronaut}>
            <img
              src={useColorModeValue(
                '/images/astronaut_black.gif',
                '/images/astronaut_white.gif',
              )}
              alt="astronaut"
              width="140"
            />
          </Box>
          <Text
            textAlign={{ base: 'center', md: 'left' }}
            fontSize={{ base: 16, md: 18 }}
            style={{
              fontWeight: '400',
              marginBottom: 10,
            }}>
            You can generate your first song for free right
            now and get a glimpse of what you can do.
          </Text>
        </GridItem>
      </SimpleGrid>
      <Box
        pl={{ base: '8vw', md: '16vw' }}
        pr={{ base: '8vw', md: '16vw' }}
        bgColor={useColorModeValue('#EBEBEF', '#38383b')}
        style={{
          ...styles.createSongContainer,
          flexDirection: 'column',
        }}>
        <Text
          textAlign={{ base: 'center', md: 'left' }}
          style={styles.createSongTitle}>
          Create a song from a description
        </Text>
        <Box sx={styles.createSongInputContainer}>
          <Input
            size="lg"
            placeholder="Input your song description"
            _placeholder={{
              color: useColorModeValue(
                baseTheme.colors.gray[500],
                baseTheme.colors.gray[500],
              ),
            }}
            textColor={
              theme.colors.primaryFontColor.lightMode
            }
            variant="outlined"
            value={generateInput}
            onChange={onGenerateInputChange}
            bgColor={useColorModeValue(
              '#FFFFFF',
              theme.colors.primaryFontColor.darkMode,
            )}
            style={styles.createSongInput}
          />
          <Button
            variant="outlined"
            onClick={onGenerateSong}
            style={{
              ...styles.createSongInputButton,
              textTransform: 'capitalize',
            }}>
            Generate
          </Button>
        </Box>
        {isLoading ? (
          <Box
            sx={{
              marginTop: '40px',
            }}>
            <img
              src="/images/loading.svg"
              alt="loading"
              width="50"
              height="50"
            />
          </Box>
        ) : (
          <Fade in={!!song}>
            {song ? (
              <Box sx={styles.audioPlayerContainer}>
                <ReactAudioPlayer
                  src={song || ''}
                  controls
                  volume={0.5}
                  style={{
                    width: '345px',
                    maxWidth: '100%',
                  }}
                  controlsList="nodownload"
                  title="Nochentera"
                />
              </Box>
            ) : null}
          </Fade>
        )}
      </Box>
    </Box>
  )
}

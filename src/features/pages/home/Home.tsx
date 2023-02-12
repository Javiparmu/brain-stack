import ReactAudioPlayer from 'react-audio-player'
import '../../../styles/HomeStyles.css'
import { useState } from 'react'
import { useCreateSongMutation } from '../../endpoints/song'
import { useEffect } from 'react'
import {
  baseTheme,
  Box,
  Button,
  Fade,
  Grid,
  GridItem,
  Input,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import theme from '../../../theme/theme'

export const Home = () => {
  const [generateInput, setGenerateInput] =
    useState<string>('')
  const [song, setSong] = useState<string | null>(null)
  const [createSong, { data, isLoading }] =
    useCreateSongMutation()

  useEffect(() => {
    if (data) {
      setSong(data.result.url)
    }
  }, [data])

  const onGenerateInputChange = (e: any) => {
    setGenerateInput(
      e.target.value.charAt(0).toUpperCase() +
        e.target.value.slice(1),
    )
  }

  const onGenerateSong = () => {
    if (generateInput !== '') {
      createSong({
        title: 'mercho',
        url: 'https://music-ai-s3.s3.eu-south-2.amazonaws.com/songs/mercho.mp3',
        input: generateInput,
        userId: '63e7d58f2db543f9e835fb32',
      })
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
        marginTop="6vh"
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
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
        justifyContent="center"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: '40vh',
          backgroundColor: useColorModeValue(
            '#EBEBEF',
            '#38383b',
          ),
          marginTop: '10vh',
        }}>
        <Text
          textAlign={{ base: 'center', md: 'left' }}
          style={{
            fontSize: 24,
            fontWeight: '700',
            marginTop: '3vh',
          }}>
          Create a song from a description
        </Text>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '3vh',
          }}>
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
            style={{
              width: '30vw',
              minWidth: '200px',
              borderTopRightRadius: '0px',
              borderBottomRightRadius: '0px',
              backgroundColor: useColorModeValue(
                '#FFFFFF',
                theme.colors.primaryFontColor.darkMode,
              ),
            }}
          />
          <Button
            variant="outlined"
            onClick={onGenerateSong}
            style={{
              borderColor: '#676BB9',
              backgroundColor: '#676BB9',
              color: '#FFFFFF',
              height: '48px',
              borderTopRightRadius: '5px',
              borderBottomRightRadius: '5px',
              borderTopLeftRadius: '0px',
              borderBottomLeftRadius: '0px',
              textTransform: 'capitalize',
              fontWeight: '500',
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
              <Box
                sx={{
                  marginTop: '40px',
                  padding: '1px',
                  height: '56px',
                  width: '345px',
                  backgroundColor: '#676BB9',
                  borderRadius: '50px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
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

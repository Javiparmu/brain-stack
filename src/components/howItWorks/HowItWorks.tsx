import { Box, Image } from '@chakra-ui/react';
import { FC } from 'react';

export const HowItWorks: FC = () => {
  return (
    <Box
      as="section"
      id="how-it-works"
      className="hidden"
      px={{ base: '4', md: '8' }}
    >
      <Box
        maxW="7xl"
        mx="auto"
        px={{ base: '6', md: '8' }}
        py="10"
        rounded="lg"
      >
        <Box
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          mb="10"
        >
          How it works
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
          }}
          gridGap="8"
        >
          <Box className="hiw-image hidden">
            <Image
              src="/images/how-it-works.png"
              alt="how it works"
              borderRadius={{ base: '10px', md: '15px' }}
              width={{ base: '80vw', md: '35vw' }}
              boxShadow="md"
            />
          </Box>
          <Box
            className="hiw-text hidden"
            zIndex={-1}
            marginLeft={6}
          >
            <Box
              as="h3"
              fontSize="2xl"
              fontWeight="bold"
              textAlign={{ base: 'center', md: 'left' }}
              mb="2"
            >
              1. Create a song
            </Box>
            <Box
              as="p"
              textAlign={{ base: 'center', md: 'left' }}
            >
              You can create a song by describing it in
              words. You can also upload an audio file to
              use as the song base melody or even use our
              selectors to choose the genre, mood and
              instrument of your generated song.
            </Box>
            <Box
              as="h3"
              fontSize="2xl"
              fontWeight="bold"
              textAlign={{ base: 'center', md: 'left' }}
              mt="4"
              mb="2"
            >
              2. Download & share
            </Box>
            <Box
              as="p"
              textAlign={{ base: 'center', md: 'left' }}
            >
              Download your song and share it with your
              friends. You can use it as the base from your
              next song.
            </Box>
            <Box
              as="h3"
              fontSize="2xl"
              fontWeight="bold"
              textAlign={{ base: 'center', md: 'left' }}
              mt="4"
              mb="2"
            >
              3. Manage your songs
            </Box>
            <Box
              as="p"
              textAlign={{ base: 'center', md: 'left' }}
            >
              See the list of all your songs and manage them
              from your profile page. Regenerate any song or
              download it from there.
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

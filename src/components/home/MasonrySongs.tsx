import { masonryItems } from '@/utils/constants';
import { Box, Center, Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import { AudioPlayer } from './AudioPlayer';

export const MasonrySongs: FC = () => {
  return (
    <Box
      w="100%"
      mx="auto"
      mt={{ base: '2vh', md: '4vh', lg: '6vh' }}
      sx={{ columnCount: [1, 2, 3], columnGap: '12px' }}
    >
      {masonryItems.map(({ id, image, song }) => (
        <Box key={id} position="relative">
          {/* TODO: Cambiar por Image de nextjs */}
          <Image
            key={image}
            w="100%"
            borderRadius="xl"
            display="inline-block"
            src={image}
            alt="song image preview"
            objectFit="cover"
          />
          <Center position="absolute" top="0" bottom="0" left="0" right="0">
            <AudioPlayer song={song} />
          </Center>
        </Box>
      ))}
    </Box>
  );
};

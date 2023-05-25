import { Text } from '@chakra-ui/react';
import React, { FC } from 'react';

export const MainHeader: FC = () => {
  return (
    <Text
      fontSize={{ base: 36, md: 52, lg: 74 }}
      textAlign={{ base: 'center', md: 'center' }}
    >
      The{' '}
      <Text
        as="span"
        bgGradient="linear(to-r, #676bb9, #359ebb)"
        bgClip="text"
      >
        easiest{' '}
      </Text>
      way to create your own AI generated{' '}
      <Text
        as="span"
        bgGradient="linear(to-r, #676bb9, #359ebb)"
        bgClip="text"
      >
        music.
      </Text>{' '}
    </Text>
  );
};

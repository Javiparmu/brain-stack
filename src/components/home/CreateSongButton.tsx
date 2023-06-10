import { Link } from '@chakra-ui/next-js';
import { Box, Button, Text, useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';

export const CreateSongButton: FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display={{ base: 'none', md: 'flex' }}
        flexDir="row"
        alignItems="center"
      >
        <Text
          textAlign={{ base: 'center', md: 'left' }}
          fontSize={{ base: 16, md: 18 }}
          color="#9B9CA1"
        >
          Generate your
        </Text>
        <Text
          className="scroll"
          textAlign={{ base: 'center', md: 'left' }}
          fontSize={{ base: 16, md: 18 }}
          fontWeight={700}
          marginLeft="5px"
        >
          first song
        </Text>
      </Box>
      <Button
        as={Link}
        href="/song-generator"
        borderRadius={25}
        paddingX={5}
        paddingY={6}
        marginX={10}
        fontWeight={useColorModeValue('500', '700')}
        bgColor={useColorModeValue('#1E1D30', '#E2E8F0')}
        color={useColorModeValue('white', 'black')}
        _hover={{
          opacity: 0.8,
        }}
      >
        Start creating
      </Button>
      <Box display={{ base: 'none', md: 'flex' }} flexDir="row">
        <Text
          className="scroll"
          textAlign={{ base: 'center', md: 'left' }}
          fontSize={{ base: 16, md: 18 }}
          color="#9B9CA1"
        >
          For
        </Text>
        <Text
          className="scroll"
          textAlign={{ base: 'center', md: 'left' }}
          fontSize={{ base: 16, md: 18 }}
          fontWeight={700}
          marginLeft="5px"
        >
          free
        </Text>
        <Text
          className="scroll"
          textAlign={{ base: 'center', md: 'left' }}
          fontSize={{ base: 16, md: 18 }}
          color="#9B9CA1"
          marginLeft="5px"
        >
          right now
        </Text>
      </Box>
    </Box>
  );
};

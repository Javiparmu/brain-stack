import {
  Box,
  Button,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { FC } from 'react';

export const CreateSongButton: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        display={{ base: 'none', md: 'flex' }}
        flexDir="row"
        alignItems="center"
      >
        <Text
          textAlign={{ base: 'center', md: 'left' }}
          fontSize={{ base: 16, md: 18 }}
          style={{
            color: '#9B9CA1',
          }}
        >
          Generate your
        </Text>
        <Text
          className="scroll"
          textAlign={{ base: 'center', md: 'left' }}
          fontSize={{ base: 16, md: 18 }}
          style={{
            fontWeight: '700',
            marginLeft: 5,
          }}
        >
          first song
        </Text>
      </Box>
      <Button
        sx={{
          borderRadius: 25,
          paddingX: 5,
          paddingY: 6,
          marginX: 10,
        }}
        fontWeight={useColorModeValue('500', '700')}
        bgColor={useColorModeValue('#1E1D30', '#E2E8F0')}
        color={useColorModeValue('white', 'black')}
        onClick={() => {
          window.location.href = '/song-generator';
        }}
        _hover={{
          opacity: 0.8,
        }}
      >
        Start creating
      </Button>
      <Box
        display={{ base: 'none', md: 'flex' }}
        flexDir="row"
      >
        <Text
          className="scroll"
          textAlign={{ base: 'center', md: 'left' }}
          fontSize={{ base: 16, md: 18 }}
          style={{
            color: '#9B9CA1',
          }}
        >
          For
        </Text>
        <Text
          className="scroll"
          textAlign={{ base: 'center', md: 'left' }}
          fontSize={{ base: 16, md: 18 }}
          style={{
            fontWeight: '700',
            marginLeft: 5,
          }}
        >
          free
        </Text>
        <Text
          className="scroll"
          textAlign={{ base: 'center', md: 'left' }}
          fontSize={{ base: 16, md: 18 }}
          style={{
            color: '#9B9CA1',
            marginLeft: 5,
          }}
        >
          right now
        </Text>
      </Box>
    </Box>
  );
};

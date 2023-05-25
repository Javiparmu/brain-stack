import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { SocialButton } from './SocialButton';
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

export const Footer: FC = () => {
  return (
    <Box
      borderTopWidth={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue(
        'gray.200',
        'gray.700',
      )}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        height={20}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ md: 'space-between' }}
        align={{ md: 'center' }}
      >
        <Text>© 2023 Music AI. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram fontSize={20} />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

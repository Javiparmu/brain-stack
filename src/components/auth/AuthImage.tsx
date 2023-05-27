import { Image } from '@chakra-ui/next-js';
import { Box } from '@chakra-ui/react';
import React, { FC } from 'react';

export const AuthImage: FC = () => {
  return (
    <Box display={{ base: 'none', md: 'flex' }}>
      <Image
        borderRadius={{
          base: '20px 20px 0 0',
          md: '20px 0 0 20px',
        }}
        src="/images/login_image.jpg"
        alt="signUp image"
        width={400}
        height={400}
        boxSize={{ base: 200, md: 500 }}
        rotate={{ base: '90', md: '0' }}
        objectFit={'cover'}
      />
    </Box>
  );
};

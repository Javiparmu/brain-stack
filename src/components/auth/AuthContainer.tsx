import { Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import React, { FC, FormEvent, PropsWithChildren } from 'react';
import { AuthImage } from './AuthImage';

interface AuthContainerProps {
  onSubmit: (e: FormEvent) => void;
}

export const AuthContainer: FC<PropsWithChildren<AuthContainerProps>> = ({
  children,
  onSubmit,
}) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <SimpleGrid
      bgColor={useColorModeValue('gray.100', 'gray.800')}
      width={{ base: '90vw', md: '55vw' }}
      columns={{ base: 1, md: 2 }}
      mt={{ base: '2vh', md: '6vh' }}
    >
      <AuthImage />
      <Box
        p={10}
        ml={{ base: '0', md: '5' }}
        mr={{ base: '0', md: '5' }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
        as="form"
        onSubmit={handleSubmit}
      >
        {children}
      </Box>
    </SimpleGrid>
  );
};

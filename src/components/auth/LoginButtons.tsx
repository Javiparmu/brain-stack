import theme from '@/theme/theme';
import { Box, Button, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';

export const LoginButtons: FC = () => {
  return (
    <Box
      gap={10}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Button
        bgColor={useColorModeValue(
          theme.colors.primary,
          theme.colors.primaryDark,
        )}
        _hover={{
          opacity: 0.9,
        }}
        color={useColorModeValue(
          theme.colors.primaryFontColor.darkMode,
          theme.colors.primaryFontColor.lightMode,
        )}
        flex={1}
        type="button"
        as={Link}
        href="/signup"
        fontWeight={400}
        px={5}
      >
        Register
      </Button>
      <Button
        bgColor={useColorModeValue(
          theme.colors.primary,
          theme.colors.primaryDark,
        )}
        _hover={{
          opacity: 0.9,
        }}
        color={useColorModeValue(
          theme.colors.primaryFontColor.darkMode,
          theme.colors.primaryFontColor.lightMode,
        )}
        flex={1}
        type="submit"
        fontWeight={400}
        px={5}
      >
        Login
      </Button>
    </Box>
  );
};

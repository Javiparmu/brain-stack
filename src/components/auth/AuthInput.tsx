import theme from '@/theme/theme';
import { Input, InputProps, useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';

export const AuthInput: FC<InputProps> = (props) => {
  return (
    <Input
      bgColor={useColorModeValue('#ffffff', '#202023')}
      focusBorderColor={theme.colors.primary}
      _hover={{
        borderColor: theme.colors.primary,
      }}
      _autofill={{
        WebkitBoxShadow: `0 0 0 1000px ${useColorModeValue(
          '#ffffff',
          '#202023',
        )} inset`,
      }}
      {...props}
    />
  );
};

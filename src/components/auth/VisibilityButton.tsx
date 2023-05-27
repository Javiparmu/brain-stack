import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { IconButton, useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';

interface VisibilityButtonProps {
  passwordVisible: boolean;
  onClick: () => void;
}

export const VisibilityButton: FC<VisibilityButtonProps> = ({
  passwordVisible,
  onClick,
}) => {
  return (
    <IconButton
      aria-label="toggle password visibility"
      color={useColorModeValue('gray.500', 'gray.200')}
      icon={
        passwordVisible ? (
          <ViewIcon
            color={'gray.500'}
            boxSize={5}
            _hover={{ color: 'gray.400' }}
          />
        ) : (
          <ViewOffIcon
            color={'gray.500'}
            boxSize={5}
            _hover={{ color: 'gray.400' }}
          />
        )
      }
      variant="ghost"
      type="button"
      onClick={onClick}
      _hover={{
        bgColor: 'transparent',
      }}
    />
  );
};

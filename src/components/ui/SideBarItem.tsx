import { Flex, Text, Icon } from '@chakra-ui/react';
import { FC } from 'react';

interface SideBarItemProps {
  icon: any;
  title: string;
  description: string;
  active?: boolean;
  navSize: string;
  onClick?: () => void;
}

export const SideBarItem: FC<SideBarItemProps> = ({
  icon,
  title,
  active = false,
  navSize,
  onClick,
}: SideBarItemProps) => {
  return (
    <Flex
      mb={5}
      flexDir="row"
      w={navSize === 'small' ? '100%' : '100%'}
      bgColor={active ? '#b9bbf0' : '#fafafa'}
      borderTopRightRadius={
        active && navSize === 'large' ? '30px' : '0px'
      }
      borderBottomRightRadius={
        active && navSize === 'large' ? '30px' : '0px'
      }
      justifyContent={
        navSize === 'small' ? 'center' : 'flex-start'
      }
      align="center"
      p={4}
      _hover={{
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <Icon
        as={icon}
        fontSize="24"
        color={active ? 'gray.700' : 'gray.500'}
      />
      <Text
        ml={4}
        fontSize="md"
        fontWeight={active ? 'bold' : 'normal'}
        display={navSize === 'small' ? 'none' : 'flex'}
      >
        {title}
      </Text>
    </Flex>
  );
};

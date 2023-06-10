import { HamburgerIcon, SettingsIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Divider,
  Flex,
  Heading,
  IconButton,
  Text,
} from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { SideBarItem } from './SideBarItem';
import { FiHome } from 'react-icons/fi';
import { MdLibraryMusic, MdAttachMoney } from 'react-icons/md';

type sideBarItems = 'dashboard' | 'mySongs' | 'payments' | 'settings';

export const SideBar: FC = () => {
  const user = {
    username: 'John Doe',
    avatar: 'https://bit.ly/broken-link',
    email: '123',
  };

  const [selectedItem, setSelectedItem] = useState<sideBarItems>('dashboard');
  const [navSize, setNavSize] = useState<'small' | 'large'>('large');

  const onItemClick = (item: string) => {
    setSelectedItem(item as sideBarItems);
  };

  return (
    <Flex
      pos="sticky"
      zIndex="1"
      bgColor="white"
      borderBottomRightRadius={navSize === 'small' ? '10px' : '20px'}
      backgroundColor="#fafafa"
      border="1px solid #e2e8f0"
      borderTop={0}
      h="80vh"
      w={navSize === 'small' ? '75px' : '250px'}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        flexDir="column"
        alignItems={navSize === 'small' ? 'center' : 'flex-start'}
        as="nav"
      >
        <IconButton
          p={4}
          aria-label="Open Menu"
          background="none"
          _hover={{ background: 'none' }}
          icon={<HamburgerIcon />}
          onClick={() => {
            if (navSize === 'small') {
              setNavSize('large');
            } else {
              setNavSize('small');
            }
          }}
          mb={10}
        />
        <SideBarItem
          navSize={navSize}
          title="Dashboard"
          icon={FiHome}
          description="Dashboard"
          active={selectedItem === 'dashboard'}
          onClick={() => onItemClick('dashboard')}
        />
        <SideBarItem
          navSize={navSize}
          title="My songs"
          icon={MdLibraryMusic}
          description="My songs"
          active={selectedItem === 'mySongs'}
          onClick={() => onItemClick('mySongs')}
        />
        <SideBarItem
          navSize={navSize}
          title="Payments"
          icon={MdAttachMoney}
          description="Payments"
          active={selectedItem === 'payments'}
          onClick={() => onItemClick('payments')}
        />
        <SideBarItem
          navSize={navSize}
          title="Settings"
          icon={SettingsIcon}
          description="Settings"
          active={selectedItem === 'settings'}
          onClick={() => onItemClick('settings')}
        />
      </Flex>
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        mb={4}
        alignItems={navSize === 'small' ? 'center' : 'flex-start'}
      >
        <Divider display={navSize === 'small' ? 'none' : 'flex'} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src={user?.avatar} />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize === 'small' ? 'none' : 'flex'}
          >
            <Heading as="h3" size="sm">
              {user?.username}
            </Heading>
            <Text>{user?.email}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

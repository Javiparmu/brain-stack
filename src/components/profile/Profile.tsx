import { Box } from '@chakra-ui/react';
import { SideBar } from '../ui/SideBar';
import { FC } from 'react';

export const Profile: FC = () => {
  return (
    <Box pl={{ base: 0, md: '16vw' }} pr={{ base: 0, md: '16vw' }}>
      <SideBar />
    </Box>
  );
};

import { useEffect, useState } from 'react';
import { Box, GridItem, SimpleGrid } from '@chakra-ui/react';
import {
  HowItWorks,
  MainHeader,
  Pricing,
  MainLayout,
  Footer,
  CreateSongButton,
  MasonrySongs,
} from '@/components';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '@/redux/auth/authSlice';
import { User } from '@/interfaces/users';
import { createObservers } from '@/utils/helpers';
import { NextPage } from 'next';

const gridSpace = {
  base: '2vh',
  md: '4vh',
  lg: '6vh',
};

const Home: NextPage = () => {
  const [user, setUser] = useState<User>({} as User);
  const [token, setToken] = useState<string>('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUser(JSON.parse(localStorage.getItem('user') || 'null'));
      setToken(localStorage.getItem('token') || '');
    }

    dispatch(setCurrentUser({ user, token }));
    createObservers();
  }, [token, user]);

  return (
    <MainLayout>
      <Box>
        <Box>
          <SimpleGrid
            marginTop={gridSpace}
            rowGap={gridSpace}
            px={{ base: '6vw', md: '8vw', lg: '16vw' }}
          >
            <GridItem>
              <MainHeader />
            </GridItem>
            <GridItem>
              <CreateSongButton />
            </GridItem>
            <GridItem>
              <MasonrySongs />
            </GridItem>
            <GridItem>
              <HowItWorks />
            </GridItem>
            <GridItem>
              <Pricing />
            </GridItem>
            <GridItem>
              <Footer />
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Home;

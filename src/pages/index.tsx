import { useEffect } from 'react';
import {
  Box,
  GridItem,
  SimpleGrid,
} from '@chakra-ui/react';
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

const Home: NextPage = () => {
  const dispatch = useDispatch();

  let user: User = {} as User;
  let token = '';

  if (typeof window !== 'undefined') {
    user = JSON.parse(
      localStorage.getItem('user') || 'null',
    );
    token = localStorage.getItem('token') || '';
  }

  useEffect(() => {
    dispatch(setCurrentUser({ user, token }));
    createObservers();
  }, [token, user]);

  return (
    <MainLayout>
      <Box>
        <Box>
          <SimpleGrid
            marginTop={{
              base: '2vh',
              md: '4vh',
              lg: '6vh',
            }}
            rowGap={{
              base: '2vh',
              md: '4vh',
              lg: '6vh',
            }}
            pl={{ base: '6vw', md: '8vw', lg: '16vw' }}
            pr={{ base: '6vw', md: '8vw', lg: '16vw' }}
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

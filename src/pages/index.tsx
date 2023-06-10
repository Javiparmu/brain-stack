import { useEffect } from 'react';
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
import { createObservers } from '@/utils/helpers';
import { NextPage } from 'next';
import { useAuthStore } from '@/store/authStore';

const gridSpace = {
  base: '2vh',
  md: '4vh',
  lg: '6vh',
};

const Home: NextPage = () => {
  const { setUser, setToken } = useAuthStore();

  if (typeof window !== 'undefined') {
    setUser(JSON.parse(localStorage.getItem('user') || 'null'));
    setToken(localStorage.getItem('token') || '');
  }

  useEffect(() => {
    createObservers();
  }, []);

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

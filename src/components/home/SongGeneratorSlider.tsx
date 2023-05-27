import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { FC, useState } from 'react';
import Slider from 'react-slick';
import theme from '../../theme/theme';
import { HomeStyles as styles } from '../../styles/HomeStyles';
import { SongFromDescription } from './SongFromDescription';
import { SongFromMelody } from './SongFromMelody';
import { SongFromSelections } from './SongFromSelections';

const settings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: false,
  speed: 700,
  autoplaySpeed: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const texts = [
  'Create a song from a description',
  'Create a song from a whistled melody',
  'Create a song from selections',
];

export const SongGeneratorSlider: FC = () => {
  const [slider, setSlider] = useState<Slider | null>(null);

  const top = useBreakpointValue({
    base: '90%',
    md: '50%',
  });
  const side = useBreakpointValue({
    base: '30%',
    md: '10px',
  });

  return (
    <Box bgColor={useColorModeValue('gray.100', '#38383b')}>
      <Box
        zIndex={1}
        pl={{ base: '5vw', md: '10vw', lg: '18vw' }}
        pr={{ base: '5vw', md: '10vw', lg: '18vw' }}
        pt={{ base: 0, md: '2vh' }}
        height="240px"
      >
        <Box position={'relative'} overflow={'hidden'}>
          <ChevronLeftIcon
            aria-label="left-arrow"
            boxSize={{ base: 0, md: 100 }}
            position="absolute"
            left={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            color={useColorModeValue(
              theme.colors.primaryFontColor.lightMode,
              theme.colors.primaryFontColor.darkMode,
            )}
            borderRadius="50%"
            _hover={{
              cursor: 'pointer',
              backgroundColor: useColorModeValue(
                'rgba(0, 0, 0, 0.05)',
                'rgba(255, 255, 255, 0.05)',
              ),
            }}
            onClick={() => slider?.slickPrev()}
          />
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {texts.map((text, index) => {
              console.log('index', index);
              return (
                <Box
                  key={index}
                  style={{
                    ...styles.createSongContainer,
                  }}
                >
                  <Text textAlign="center" style={styles.createSongTitle}>
                    {text}
                  </Text>
                  {index === 0 && <SongFromDescription />}
                  {index === 1 && <SongFromMelody />}
                  {index === 2 && <SongFromSelections />}
                </Box>
              );
            })}
          </Slider>
          <ChevronRightIcon
            aria-label="right-arrow"
            boxSize={{ base: 0, md: 100 }}
            position="absolute"
            right={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            color={useColorModeValue(
              theme.colors.primaryFontColor.lightMode,
              theme.colors.primaryFontColor.darkMode,
            )}
            borderRadius="50%"
            _hover={{
              cursor: 'pointer',
              backgroundColor: useColorModeValue(
                'rgba(0, 0, 0, 0.05)',
                'rgba(255, 255, 255, 0.05)',
              ),
            }}
            onClick={() => slider?.slickNext()}
          />
        </Box>
      </Box>
    </Box>
  );
};

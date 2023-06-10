import { FC } from 'react';
import {
  Text,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { MainLayout, SongUpload } from '@/components';
import { ModelList } from '@/components/songGenerator/ModelList';
import { SearchIcon } from '@chakra-ui/icons';

const SongGeneratorPage: FC = () => {
  return (
    <MainLayout>
      <VStack
        spacing={'1vh'}
        marginTop={'2vh'}
        pl={{ base: '8vw', lg: '16vw' }}
        pr={{ base: '8vw', lg: '16vw' }}
      >
        <Text
          fontSize={{ base: '3xl', md: '5xl' }}
          fontWeight="500"
          textAlign="center"
        >
          Upload the voice
        </Text>
        <SongUpload />
        <Text fontSize={{ base: 'xl', md: '2xl' }} textAlign="center">
          Select a model
        </Text>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Search"
            size="md"
            width="15vw"
            minW={'200px'}
            borderRadius={'20px'}
            borderColor={'gray.400'}
          />
        </InputGroup>
        <ModelList />
      </VStack>
    </MainLayout>
  );
};

export default SongGeneratorPage;

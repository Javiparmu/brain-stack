import { FC, useState } from 'react';
import {
  Box,
  Card,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { modelList } from '@/utils';
import { Image } from '@chakra-ui/next-js';
import { StarIcon } from '@chakra-ui/icons';
import theme from '@/theme/theme';

export const ModelList: FC = () => {
  const [selectedModel, setSelectedModel] = useState<string>('');

  const onModelClick = (model: string) => {
    setSelectedModel(model);
  };

  const borderColor = useColorModeValue(
    theme.colors.primary,
    theme.colors.primaryDark,
  );

  return (
    <SimpleGrid spacingY={5} pb={100} w="100%">
      {modelList.map((model) => (
        <Card
          key={model.artist}
          display="flex"
          flexDir="row"
          height={130}
          borderRadius={15}
          borderWidth={selectedModel === model.artist ? 4 : 0}
          borderColor={
            selectedModel === model.artist ? borderColor : 'transparent'
          }
          transition={'all 0.15s ease-in-out'}
          justifyContent="space-between"
          onClick={() => onModelClick(model.artist)}
          _hover={{
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
            transform: 'scale(1.03)',
            cursor: 'pointer',
          }}
        >
          <Box display="flex" flexDir="row">
            <Image
              src={model.image}
              alt={model.artist}
              width={130}
              height={130}
              opacity={0.8}
              borderTopLeftRadius="lg"
              borderBottomLeftRadius="lg"
              objectFit="cover"
            />
            <Text
              fontSize={{ base: 'xl', md: '2xl' }}
              alignSelf="center"
              marginLeft={{ base: 1, sm: 4, md: 8, lg: 10 }}
            >
              {model.artist}
            </Text>
          </Box>
          <Box display="flex" flexDir="row" alignItems="center">
            <Text
              fontSize={{ base: 'xl', md: '3xl' }}
              marginRight={{ base: 2, md: 5 }}
              pt={1}
            >
              {model.rate}
            </Text>
            <StarIcon
              color="yellow.400"
              marginRight={10}
              fontSize={{ base: 'xl', md: '3xl' }}
            />
          </Box>
        </Card>
      ))}
    </SimpleGrid>
  );
};

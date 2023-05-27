import { FC, useState } from 'react';
import {
  VStack,
  HStack,
  Input,
  Button,
  Select,
  Tag,
  TagLabel,
  TagCloseButton,
  Flex,
  Wrap,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { MainLayout } from '@/components';
import { Category, CategoryGroup, TagItem, categoryOptions } from '@/utils';
import { SongCategory } from '@/utils/enums';

const SongGeneratorPage: FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [categoryGroups, setCategoryGroups] = useState<CategoryGroup[]>([]);

  const handlePromptChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPrompt(event.target.value);

  const handleAddOrRemoveCategory = (category: Category) => {
    setCategoryGroups((prevState) =>
      prevState.some((group) => group.category === category)
        ? prevState.filter((group) => group.category !== category)
        : [...prevState, { category, tags: [] }],
    );
  };

  const handleAddTag = (tag: TagItem, index: number) => {
    setCategoryGroups((prevState) =>
      prevState.map((group, groupIndex) =>
        groupIndex === index && !group.tags.includes(tag)
          ? { ...group, tags: [...group.tags, tag] }
          : group,
      ),
    );
  };

  const handleRemoveTag = (category: Category, tagToRemove: TagItem) => {
    setCategoryGroups((prevState) =>
      prevState.map((group) =>
        group.category === category
          ? {
              ...group,
              tags: group.tags.filter((tag) => tag !== tagToRemove),
            }
          : group,
      ),
    );
  };

  return (
    <MainLayout>
      <VStack
        spacing={8}
        align="start"
        marginTop={{
          base: '2vh',
          md: '4vh',
          lg: '6vh',
        }}
        pl={{ base: '6vw', md: '8vw', lg: '16vw' }}
        pr={{ base: '6vw', md: '8vw', lg: '16vw' }}
      >
        <Flex justifyContent="flex-start" width="50%" columnGap={5}>
          <Input
            placeholder="Introduce el prompt"
            height="60px"
            value={prompt}
            onChange={handlePromptChange}
          />
          <Button colorScheme="blue" alignSelf="center">
            Generar
          </Button>
        </Flex>
        <HStack>
          <Button
            onClick={() => handleAddOrRemoveCategory(SongCategory.GENRE)}
            colorScheme="blue"
          >
            <HStack spacing={1}>
              {categoryGroups.some(
                (group) => group.category === SongCategory.GENRE,
              ) ? (
                <MinusIcon />
              ) : (
                <AddIcon />
              )}
              <span>Genre</span>
            </HStack>
          </Button>
          <Button
            onClick={() => handleAddOrRemoveCategory(SongCategory.MOOD)}
            colorScheme="blue"
          >
            <HStack spacing={1}>
              {categoryGroups.some(
                (group) => group.category === SongCategory.MOOD,
              ) ? (
                <MinusIcon />
              ) : (
                <AddIcon />
              )}
              <span>Mood</span>
            </HStack>
          </Button>
          <Button
            onClick={() => handleAddOrRemoveCategory(SongCategory.INSTRUMENT)}
            colorScheme="blue"
          >
            <HStack spacing={1}>
              {categoryGroups.some(
                (group) => group.category === SongCategory.INSTRUMENT,
              ) ? (
                <MinusIcon />
              ) : (
                <AddIcon />
              )}
              <span>Instrument</span>
            </HStack>
          </Button>
        </HStack>
        {categoryGroups.map((group, index) => (
          <VStack align="start" key={index}>
            <Flex justifyContent="flex-start" width="100%">
              <Select
                placeholder={`Add a ${group.category}`}
                value={`Add a ${group.category}`}
                width="250px"
                onChange={(e) => handleAddTag(e.target.value, index)}
              >
                {categoryOptions[group.category].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </Flex>

            <Wrap spacing={4}>
              {group.tags.map((tag, tagIndex) => (
                <Tag
                  key={tagIndex}
                  size="lg"
                  borderRadius="full"
                  variant="solid"
                  colorScheme="blue"
                >
                  <TagLabel>{tag}</TagLabel>
                  <TagCloseButton
                    onClick={() => handleRemoveTag(group.category, tag)}
                  />
                </Tag>
              ))}
            </Wrap>
          </VStack>
        ))}
      </VStack>
    </MainLayout>
  );
};

export default SongGeneratorPage;

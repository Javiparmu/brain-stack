import { Flex, Heading, Text, Icon } from '@chakra-ui/react';
import React, { FC } from 'react';

interface SideBarHoverBoxProps {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  description: string;
}

export const SideBarHoverBox: FC<SideBarHoverBoxProps> = ({
  title,
  icon,
  description,
}: SideBarHoverBoxProps) => {
  return (
    <>
      <Flex
        pos="absolute"
        mt="calc(100px - 7.5px)"
        ml="-10px"
        width={0}
        height={0}
        borderTop="10px solid transparent"
        borderBottom="10px solid transparent"
        borderRight="10px solid #82AAAD"
      />
      <Flex
        h={200}
        w={'100%'}
        flexDir="column"
        alignItems="center"
        justify="center"
        backgroundColor="#82AAAD"
        borderRadius="10px"
        color="#fff"
        textAlign="center"
      >
        <Icon as={icon} fontSize="3xl" mb={4} />
        <Heading size="md" fontWeight="normal">
          {title}
        </Heading>
        <Text>{description}</Text>
      </Flex>
    </>
  );
};

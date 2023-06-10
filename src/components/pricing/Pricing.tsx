import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';

interface PricingProps {
  show?: boolean;
}

export const Pricing: FC<PricingProps> = ({ show = false }) => {
  return (
    <Box className={show ? '' : 'hidden'} as="section">
      <Box maxW="7xl" mx="auto" px={{ base: '6', md: '8' }}>
        <Box fontSize="4xl" fontWeight="bold" textAlign="center" mb="10">
          Pricing
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="10">
          <Card
            className={show ? '' : 'hidden'}
            borderRadius={10}
            boxShadow="md"
          >
            <CardBody>
              <Stack spacing="4">
                <Box textAlign="center">
                  <Text fontSize="2xl" fontWeight="bold">
                    Basic
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Monthly
                  </Text>
                </Box>
                <Divider />
                <Stack spacing="4">
                  <Box display="flex" flexDir="row" alignItems="center">
                    <CheckIcon color="green.500" mr="2" />
                    <Text>5 songs per month</Text>
                  </Box>
                  <Box display="flex" flexDir="row" alignItems="center">
                    <CheckIcon color="green.500" mr="2" />
                    <Text>List of your songs</Text>
                  </Box>
                  <Box display="flex" flexDir="row" alignItems="center">
                    <CloseIcon color="red.500" mr="2" boxSize={3} />
                    <Text>Regenerate songs</Text>
                  </Box>
                  <Box display="flex" flexDir="row" alignItems="center">
                    <CloseIcon color="red.500" mr="2" boxSize={3} />
                    <Text>Recommended inputs</Text>
                  </Box>
                </Stack>
              </Stack>
            </CardBody>
            <CardFooter flexDir="column">
              <Box textAlign="center">
                <Text fontSize="2xl" fontWeight="bold">
                  $4.95
                </Text>
                <Text fontSize="sm" color="gray.500">
                  /month
                </Text>
              </Box>
              <Button
                w="full"
                bgColor={'#676BB9'}
                color={'white'}
                variant="solid"
                fontWeight={'normal'}
                size="lg"
                mt="4"
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
          <Card
            className={'second-card ' + show ? '' : 'hidden'}
            borderRadius={10}
            boxShadow="md"
          >
            <CardBody>
              <Stack spacing="4">
                <Box textAlign="center">
                  <Text fontSize="2xl" fontWeight="bold">
                    Standard
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Monthly
                  </Text>
                </Box>
                <Divider />
                <Stack spacing="4">
                  <Box display="flex" flexDir="row" alignItems="center">
                    <CheckIcon color="green.500" mr="2" />
                    <Text>12 songs per month</Text>
                  </Box>
                  <Box display="flex" flexDir="row" alignItems="center">
                    <CheckIcon color="green.500" mr="2" />
                    <Text>List of your songs</Text>
                  </Box>
                  <Box display="flex" flexDir="row" alignItems="center">
                    <CheckIcon color="green.500" mr="2" />
                    <Text>Regenerate songs</Text>
                  </Box>
                  <Box display="flex" flexDir="row" alignItems="center">
                    <CloseIcon color="red.500" mr="2" boxSize={3} />
                    <Text>Recommended inputs</Text>
                  </Box>
                </Stack>
              </Stack>
            </CardBody>
            <CardFooter flexDir="column">
              <Box textAlign="center">
                <Text fontSize="2xl" fontWeight="bold">
                  $9.95
                </Text>
                <Text fontSize="sm" color="gray.500">
                  /month
                </Text>
              </Box>
              <Button
                w="full"
                bgColor={'#676BB9'}
                color={'white'}
                variant="solid"
                fontWeight={'normal'}
                size="lg"
                mt="4"
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
          <Card
            className={'third-card ' + show ? '' : 'hidden'}
            borderRadius={10}
            boxShadow="md"
          >
            <CardBody>
              <Stack spacing="4">
                <Box textAlign="center">
                  <Text fontSize="2xl" fontWeight="bold">
                    Premium
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Monthly
                  </Text>
                </Box>
                <Divider />
                <Stack spacing="4">
                  <Box display="flex" flexDir="row" alignItems="center">
                    <CheckIcon color="green.500" mr="2" />
                    <Text>30 songs per month</Text>
                  </Box>
                  <Box display="flex" flexDir="row" alignItems="center">
                    <CheckIcon color="green.500" mr="2" />
                    <Text>List of your songs</Text>
                  </Box>
                  <Box display="flex" flexDir="row" alignItems="center">
                    <CheckIcon color="green.500" mr="2" />
                    <Text>Regenerate songs</Text>
                  </Box>
                  <Box display="flex" flexDir="row" alignItems="center">
                    <CheckIcon color="green.500" mr="2" />
                    <Text>Recommended inputs</Text>
                  </Box>
                </Stack>
              </Stack>
            </CardBody>
            <CardFooter flexDir="column">
              <Box textAlign="center">
                <Text fontSize="2xl" fontWeight="bold">
                  $19.95
                </Text>
                <Text fontSize="sm" color="gray.500">
                  /month
                </Text>
              </Box>
              <Button
                w="full"
                bgColor={'#676BB9'}
                color={'white'}
                variant="solid"
                fontWeight={'normal'}
                size="lg"
                mt="4"
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import theme from '../../../theme/theme'

export const Register = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center">
      <SimpleGrid
        bgColor={useColorModeValue('gray.100', 'gray.800')}
        width={{ base: '90vw', md: '55vw' }}
        borderRadius={15}
        columns={{ base: 1, md: 2 }}
        mt={{ base: '2vh', md: '6vh' }}>
        <Box display={{ base: 'none', md: 'flex' }}>
          <Image
            borderRadius={{
              base: '20px 20px 0 0',
              md: '20px 0 0 20px',
            }}
            src="/images/login_image.jpg"
            alt="login image"
            boxSize={{ base: 200, md: 500 }}
            rotate={{ base: '90', md: '0' }}
            objectFit={'cover'}
          />
        </Box>
        <Box
          p={10}
          ml={{ base: '0', md: '5' }}
          mr={{ base: '0', md: '5' }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
          as="form">
          <Text fontSize="3xl" fontWeight="bold">
            Register
          </Text>
          <FormControl id="email" mb={5} mt={5}>
            <FormLabel
              htmlFor="email"
              fontFamily={'Roboto'}>
              Username
            </FormLabel>
            <Input
              fontFamily={'Roboto'}
              type="email"
              bgColor={useColorModeValue(
                '#ffffff',
                '#202023',
              )}
              focusBorderColor={theme.colors.primary}
              _hover={{ borderColor: theme.colors.primary }}
              _autofill={{
                WebkitBoxShadow: `0 0 0 1000px ${useColorModeValue(
                  '#ffffff',
                  '#202023',
                )} inset`,
              }}
            />
          </FormControl>
          <FormControl id="email" mb={5}>
            <FormLabel
              htmlFor="email"
              fontFamily={'Roboto'}>
              Email
            </FormLabel>
            <Input
              fontFamily={'Roboto'}
              type="email"
              bgColor={useColorModeValue(
                '#ffffff',
                '#202023',
              )}
              focusBorderColor={theme.colors.primary}
              _hover={{ borderColor: theme.colors.primary }}
              _autofill={{
                WebkitBoxShadow: `0 0 0 1000px ${useColorModeValue(
                  '#ffffff',
                  '#202023',
                )} inset`,
              }}
            />
          </FormControl>
          <FormControl id="password" mb={10}>
            <FormLabel
              htmlFor="password"
              fontFamily={'Roboto'}>
              Password
            </FormLabel>
            <Input
              fontFamily={'Roboto'}
              type="password"
              bgColor={useColorModeValue(
                '#ffffff',
                '#202023',
              )}
              focusBorderColor={theme.colors.primary}
              _hover={{ borderColor: theme.colors.primary }}
              _autofill={{
                WebkitBoxShadow: `0 0 0 1000px ${useColorModeValue(
                  '#ffffff',
                  '#202023',
                )} inset`,
              }}
            />
          </FormControl>
          <Box
            gap={10}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}>
            <Button
              flex={1}
              type="submit"
              fontWeight={400}
              pr={5}
              pl={5}
              bgColor={theme.colors.primary}
              color={'white'}
              _hover={{ bgColor: '#7e82cf' }}>
              Register
            </Button>
            <Button
              flex={1}
              as={Link}
              to="/login"
              fontWeight={400}
              pr={5}
              pl={5}
              bgColor={theme.colors.primary}
              color={'white'}
              _hover={{ bgColor: '#7e82cf' }}>
              Login
            </Button>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

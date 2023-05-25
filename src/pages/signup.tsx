import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import theme from '../theme/theme';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useRegisterUserMutation } from '../redux/endpoints/user';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { User } from '../interfaces/users';
import { setCurrentUser } from '../redux/auth/authSlice';
import { useAppDispatch } from '../store/hooks';
import { Image, Link } from '@chakra-ui/next-js';
import { MainLayout } from '@/components/layouts';
import { NextPage } from 'next';

type FormValues = {
  username: string;
  email: string;
  password: string;
};

const schema = yup.object({
  username: yup
    .string()
    .min(
      3,
      'Username needs to be at least 3 characters long.',
    )
    .required('Please enter a username.'),
  email: yup.string().required('Please enter an email.'),
  password: yup
    .string()
    .required('Please enter a password.')
    .min(8, 'Password too short.')
    .test(
      'Password is strong enough.',
      'Password must contain lowercase, uppercase and number.',
      (value: string) => {
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        let validConditions = 0;
        const numberOfMustBeValidConditions = 3;
        const conditions = [
          hasLowerCase,
          hasUpperCase,
          hasNumber,
        ];
        conditions.forEach((condition) =>
          condition ? validConditions++ : null,
        );
        if (
          validConditions >= numberOfMustBeValidConditions
        ) {
          return true;
        }
        return false;
      },
    ),
});

const Register: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const dispatch = useAppDispatch();

  const [passwordVisible, setPasswordVisible] =
    useState(false);

  const [registerUser] = useRegisterUserMutation();

  const onSubmit = async (data: FormValues) => {
    const response = await registerUser(data as User);

    if ('data' in response) {
      const data = response.data;
      dispatch(setCurrentUser(data.result));

      window.location.href = '/';
    }
  };

  return (
    <MainLayout>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <SimpleGrid
          bgColor={useColorModeValue(
            'gray.100',
            'gray.800',
          )}
          width={{ base: '90vw', md: '55vw' }}
          columns={{ base: 1, md: 2 }}
          mt={{ base: '2vh', md: '6vh' }}
        >
          <Box display={{ base: 'none', md: 'flex' }}>
            <Image
              borderRadius={{
                base: '20px 20px 0 0',
                md: '20px 0 0 20px',
              }}
              src="/images/login_image.jpg"
              alt="signUp image"
              width={400}
              height={400}
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
            as="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Text fontSize="3xl" fontWeight="bold">
              Register
            </Text>
            <FormControl id="email" mb={5} mt={5}>
              <FormLabel
                htmlFor="email"
                fontFamily={'Roboto'}
              >
                Username
              </FormLabel>
              <Input
                fontFamily={'Roboto'}
                type="text"
                bgColor={useColorModeValue(
                  '#ffffff',
                  '#202023',
                )}
                focusBorderColor={theme.colors.primary}
                _hover={{
                  borderColor: theme.colors.primary,
                }}
                _autofill={{
                  WebkitBoxShadow: `0 0 0 1000px ${useColorModeValue(
                    '#ffffff',
                    '#202023',
                  )} inset`,
                }}
                {...register('username')}
              />
              <FormErrorMessage color="red.500">
                {errors.username?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="email" mb={5}>
              <FormLabel
                htmlFor="email"
                fontFamily={'Roboto'}
              >
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
                _hover={{
                  borderColor: theme.colors.primary,
                }}
                _autofill={{
                  WebkitBoxShadow: `0 0 0 1000px ${useColorModeValue(
                    '#ffffff',
                    '#202023',
                  )} inset`,
                }}
                {...register('email')}
              />
              <FormErrorMessage color="red.500">
                {errors.email?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="password" mb={10}>
              <FormLabel
                htmlFor="password"
                fontFamily={'Roboto'}
              >
                Password
              </FormLabel>
              <InputGroup>
                <Input
                  fontFamily={'Roboto'}
                  type={
                    passwordVisible ? 'text' : 'password'
                  }
                  placeholder="Enter password"
                  bgColor={useColorModeValue(
                    '#ffffff',
                    '#202023',
                  )}
                  focusBorderColor={theme.colors.primary}
                  _hover={{
                    borderColor: theme.colors.primary,
                  }}
                  _autofill={{
                    WebkitBoxShadow: `0 0 0 1000px ${useColorModeValue(
                      '#ffffff',
                      '#202023',
                    )} inset`,
                  }}
                  {...register('password')}
                />
                <InputRightElement width="4.5rem">
                  <IconButton
                    aria-label="toggle password visibility"
                    color={useColorModeValue(
                      'gray.500',
                      'gray.200',
                    )}
                    icon={
                      passwordVisible ? (
                        <ViewIcon
                          color={'gray.500'}
                          boxSize={5}
                          _hover={{ color: 'gray.400' }}
                        />
                      ) : (
                        <ViewOffIcon
                          color={'gray.500'}
                          boxSize={5}
                          _hover={{ color: 'gray.400' }}
                        />
                      )
                    }
                    variant="ghost"
                    type="button"
                    onClick={() =>
                      setPasswordVisible(!passwordVisible)
                    }
                    _hover={{
                      bgColor: 'transparent',
                    }}
                  />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage color="red.500">
                {errors.password?.message}
              </FormErrorMessage>
            </FormControl>
            <Box
              gap={10}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Button
                flex={1}
                as={Link}
                href="/login"
                fontWeight={400}
                pr={5}
                pl={5}
                bgColor={theme.colors.primary}
                color={'white'}
                _hover={{ bgColor: '#7e82cf' }}
              >
                Login
              </Button>
              <Button
                flex={1}
                type="submit"
                fontWeight={400}
                pr={5}
                pl={5}
                bgColor={theme.colors.primary}
                color={'white'}
                _hover={{ bgColor: '#7e82cf' }}
              >
                Register
              </Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </MainLayout>
  );
};

export default Register;

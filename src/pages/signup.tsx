import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useRegisterUserMutation } from '../redux/endpoints/user';
import { User } from '../interfaces/users';
import { setCurrentUser } from '../redux/auth/authSlice';
import { useAppDispatch } from '../store/hooks';
import { MainLayout } from '@/components/layouts';
import { NextPage } from 'next';
import { registerSchema } from '@/utils/schemas';
import { RegisterFormValues } from '@/utils';
import { AuthContainer } from '@/components/auth/AuthContainer';
import { RegisterButtons } from '@/components/auth/RegisterButtons';
import { AuthInput } from '@/components/auth/AuthInput';
import { VisibilityButton } from '@/components/auth/VisibilityButton';

const Register: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerSchema),
  });
  const dispatch = useAppDispatch();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const [registerUser] = useRegisterUserMutation();

  const onSubmit = async (data: RegisterFormValues) => {
    const response = await registerUser(data as User);

    if ('data' in response) {
      const data = response.data;
      dispatch(setCurrentUser(data.result));

      window.location.href = '/';
    }
  };

  return (
    <MainLayout>
      <Box display="flex" justifyContent="center" alignItems="center">
        <AuthContainer onSubmit={handleSubmit(onSubmit)}>
          <Text fontSize="3xl" fontWeight="bold">
            Register
          </Text>
          <FormControl id="username" mb={5} mt={5}>
            <FormLabel htmlFor="username">Username</FormLabel>
            <AuthInput
              type="text"
              placeholder="Enter username"
              {...register('username')}
            />
            <FormErrorMessage color="red.500">
              {errors.username?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl id="email" mb={5}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <AuthInput
              type="email"
              placeholder="Enter email"
              {...register('email')}
            />
            <FormErrorMessage color="red.500">
              {errors.email?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl id="password" mb={10}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
              <AuthInput
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Enter password"
                {...register('password')}
              />
              <InputRightElement width="4.5rem">
                <VisibilityButton
                  passwordVisible={passwordVisible}
                  onClick={() => setPasswordVisible(!passwordVisible)}
                />
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage color="red.500">
              {errors.password?.message}
            </FormErrorMessage>
          </FormControl>
          <RegisterButtons />
        </AuthContainer>
      </Box>
    </MainLayout>
  );
};

export default Register;

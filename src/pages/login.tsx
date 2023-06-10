import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import {
  MainLayout,
  AuthContainer,
  LoginButtons,
  VisibilityButton,
  AuthInput,
} from '@/components';
import { NextPage } from 'next';
import { loginSchema } from '@/utils/schemas';
import { LoginFormValues } from '@/utils';

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSubmit = async (data: LoginFormValues) => {
    console.log(data);
  };
  return (
    <MainLayout>
      <Box display="flex" justifyContent="center" alignItems="center">
        <AuthContainer onSubmit={handleSubmit(onSubmit)}>
          <Text fontSize="3xl" fontWeight="bold">
            Login
          </Text>
          <FormControl id="email" mb={5} mt={10} isInvalid={!!errors?.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <AuthInput
              type="email"
              placeholder="Enter email"
              {...register('email')}
            />
            <FormHelperText color="red.500">
              {errors.email?.message}
            </FormHelperText>
          </FormControl>
          <FormControl id="password" mb={10} isInvalid={!!errors?.password}>
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
            <FormHelperText color="red.500">
              {errors.password?.message}
            </FormHelperText>
          </FormControl>
          <LoginButtons />
        </AuthContainer>
      </Box>
    </MainLayout>
  );
};

export default Login;

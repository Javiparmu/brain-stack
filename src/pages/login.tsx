import {
  Box,
  FormLabel,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {
  MainLayout,
  AuthContainer,
  LoginButtons,
  VisibilityButton,
  AuthInput,
} from '@/components';
import { NextPage } from 'next';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/router';

const Login: NextPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const { push } = useRouter();

  const { user, loginUser } = useAuthStore();

  useEffect(() => {
    if (user) {
      push('/');
    }
  }, [user]);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await loginUser(email, password);
  };

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <MainLayout>
      <Box display="flex" justifyContent="center" alignItems="center">
        <AuthContainer onSubmit={onSubmit}>
          <Text fontSize="3xl" fontWeight="bold">
            Login
          </Text>
          <Box id="email" mb={5} mt={10}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <AuthInput
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={onEmailChange}
            />
          </Box>
          <Box id="password" mb={10}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
              <AuthInput
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Enter password"
                value={password}
                onChange={onPasswordChange}
              />
              <InputRightElement width="4.5rem">
                <VisibilityButton
                  passwordVisible={passwordVisible}
                  onClick={() => setPasswordVisible(!passwordVisible)}
                />
              </InputRightElement>
            </InputGroup>
          </Box>
          <LoginButtons />
        </AuthContainer>
      </Box>
    </MainLayout>
  );
};

export default Login;

import {
  Box,
  FormLabel,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { ChangeEvent, FormEvent, useState } from 'react';
import {
  MainLayout,
  AuthContainer,
  RegisterButtons,
  AuthInput,
  VisibilityButton,
} from '@/components';
import { NextPage } from 'next';
import { useAuthStore } from '@/store/authStore';

const Register: NextPage = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const { user, registerUser } = useAuthStore();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await registerUser({ username, email, password });

    if (user) {
      window.location.href = '/';
    }
  };

  const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
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
            Register
          </Text>
          <Box id="username" mb={5} mt={5}>
            <FormLabel htmlFor="username">Username</FormLabel>
            <AuthInput
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={onUsernameChange}
            />
          </Box>
          <Box id="email" mb={5}>
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
          <RegisterButtons />
        </AuthContainer>
      </Box>
    </MainLayout>
  );
};

export default Register;

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import theme from '../../theme/theme'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState, useEffect } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useLoginUserMutation } from '../endpoints/user'
import { User } from '../../interfaces/users'
import { setCurrentUser } from './authSlice'
import { useDispatch } from 'react-redux'

type FormValues = {
  email: string
  password: string
}

const schema = yup.object({
  email: yup.string().required('Please enter an email.'),
  password: yup
    .string()
    .required('Please enter a password.')
    .min(8, 'Password too short.')
    .test(
      'Password is strong enough.',
      'Password must contain lowercase, uppercase and number.',
      (value: string, context: any) => {
        const hasUpperCase = /[A-Z]/.test(value)
        const hasLowerCase = /[a-z]/.test(value)
        const hasNumber = /[0-9]/.test(value)
        let validConditions = 0
        const numberOfMustBeValidConditions = 3
        const conditions = [
          hasLowerCase,
          hasUpperCase,
          hasNumber,
        ]
        conditions.forEach(condition =>
          condition ? validConditions++ : null,
        )
        if (
          validConditions >= numberOfMustBeValidConditions
        ) {
          return true
        }
        return false
      },
    ),
})

export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [passwordVisible, setPasswordVisible] =
    useState(false)

  const [loginUser, { isLoading, error }] =
    useLoginUserMutation()

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await loginUser(data)

      if ('data' in response) {
        const data = response.data
        dispatch(setCurrentUser(data.result))
        localStorage.setItem('token', data.result.token)
        localStorage.setItem(
          'user',
          JSON.stringify(data.result.user),
        )
        navigate('/')
      }
    } catch (error) {
      console.log(error)
      alert('Something went wrong')
    }
  }
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
          m={{ base: '0', md: '5' }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
          as="form"
          onSubmit={handleSubmit(onSubmit)}>
          <Text fontSize="3xl" fontWeight="bold">
            Login
          </Text>
          <FormControl
            id="email"
            mb={5}
            mt={10}
            isInvalid={!!errors?.email}>
            <FormLabel
              htmlFor="email"
              fontFamily={'Roboto'}>
              Email
            </FormLabel>
            <Input
              fontFamily={'Roboto'}
              type="email"
              placeholder="Enter email"
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
              {...register('email')}
            />
            <FormHelperText color="red.500">
              {errors.email?.message}
            </FormHelperText>
          </FormControl>
          <FormControl
            id="password"
            mb={10}
            isInvalid={!!errors?.password}>
            <FormLabel
              htmlFor="password"
              fontFamily={'Roboto'}>
              Password
            </FormLabel>
            <InputGroup>
              <Input
                fontFamily={'Roboto'}
                type={passwordVisible ? 'text' : 'password'}
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
            <FormHelperText color="red.500">
              {errors.password?.message}
            </FormHelperText>
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
              type="button"
              as={Link}
              to="/signup"
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
              type="submit"
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

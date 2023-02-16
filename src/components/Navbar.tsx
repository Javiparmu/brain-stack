import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuOptionGroup,
  Text,
} from '@chakra-ui/react'
import { ThemeToggleButton } from './ThemeToggleButton'
import { useColorModeValue } from '@chakra-ui/react'
import theme from '../theme/theme'
import { useAppSelector } from '../app/hooks'
import { selectCurrentUser } from '../features/auth/authSlice'

export const Navbar = () => {
  const user = useAppSelector(selectCurrentUser)

  const logoutUser = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.reload()
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: useColorModeValue(
          theme.colors.gray[200],
          'gray',
        ),
        pr: { base: '8vw', md: '16vw' },
        pl: { base: '8vw', md: '16vw' },
        pt: 4,
        pb: 4,
      }}>
      <Link href="/" color="black">
        <img
          src="/images/music_ai_logo.png"
          alt="logo"
          width="180"
        />
      </Link>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Box
          gap={12}
          mr={user ? 5 : 10}
          flexDirection="row"
          alignItems="center"
          display={{ base: 'none', md: 'flex' }}>
          <Link
            href="/how-it-works"
            color="black"
            textDecoration="none">
            <Text
              _hover={{
                color: theme.colors.primary,
              }}>
              How it works
            </Text>
          </Link>
          <Link href="/pricing" color="black">
            <Text
              _hover={{
                color: theme.colors.primary,
              }}>
              Pricing
            </Text>
          </Link>
          {user ? (
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={Avatar}
                boxSize={9}
                src={user.avatar}
                backgroundColor={
                  user.avatar ? 'white' : 'gray.400'
                }
                outline="1px solid #676BB9"
              />
              <MenuList>
                <MenuItem as={Link} href="/profile">
                  <Text fontSize={16}>Profile</Text>
                </MenuItem>
                <MenuItem onClick={logoutUser}>
                  <Text fontSize={16}>Logout</Text>
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Box
              gap={4}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Button
                colorScheme="blue"
                variant="outline"
                size="sm"
                onClick={() => {
                  window.location.href = '/signup'
                }}>
                Sign up
              </Button>
              <Button
                colorScheme="blue"
                variant="solid"
                size="sm"
                onClick={() => {
                  window.location.href = '/login'
                }}>
                Sign in
              </Button>
            </Box>
          )}
        </Box>
        <Box gap={1} display="flex" flexDirection="row">
          <ThemeToggleButton />
          <Box
            display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={Link} href="/how-it-works">
                  How it works
                </MenuItem>
                <MenuItem as={Link} href="/pricing">
                  Pricing
                </MenuItem>
                {user ? (
                  <>
                    <MenuItem as={Link} href="/profile">
                      Profile
                    </MenuItem>
                    <MenuItem
                      as={Link}
                      onClick={logoutUser}>
                      Logout
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem
                      as={Link}
                      href="/login"
                      colorScheme="blue"
                      variant="solid"
                      size="sm">
                      Sign in
                    </MenuItem>
                    <MenuItem
                      as={Link}
                      href="/signup"
                      colorScheme="blue"
                      variant="outline"
                      size="sm">
                      Sign up
                    </MenuItem>
                  </>
                )}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

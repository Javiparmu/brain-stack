import { Box } from '@chakra-ui/react'
import { SideBar } from '../../components/SideBar'

export const Profile = () => {
  return (
    <Box
      pl={{ base: 0, md: '16vw' }}
      pr={{ base: 0, md: '16vw' }}>
      <SideBar />
    </Box>
  )
}

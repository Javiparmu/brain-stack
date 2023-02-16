import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Text,
  Icon,
  Box,
  LinkBox,
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { SideBarHoverBox } from './SideBarHoverBox'

interface SideBarItemProps {
  icon: any
  title: string
  description: string
  active?: boolean
  navSize: string
  onClick?: () => void
}

export const SideBarItem = ({
  icon,
  title,
  description,
  active = false,
  navSize,
  onClick,
}: SideBarItemProps) => {
  return (
    <Flex
      mb={5}
      flexDir="row"
      w={navSize === 'small' ? '100%' : '100%'}
      bgColor={active ? '#b9bbf0' : '#fafafa'}
      borderTopRightRadius={
        active && navSize === 'large' ? '30px' : '0px'
      }
      borderBottomRightRadius={
        active && navSize === 'large' ? '30px' : '0px'
      }
      justifyContent={
        navSize === 'small' ? 'center' : 'flex-start'
      }
      align="center"
      p={4}
      _hover={{
        cursor: 'pointer',
      }}
      onClick={onClick}>
      <Icon
        as={icon}
        fontSize="24"
        color={active ? 'gray.700' : 'gray.500'}
      />
      <Text
        ml={4}
        fontSize="md"
        fontWeight={active ? 'bold' : 'normal'}
        display={navSize === 'small' ? 'none' : 'flex'}>
        {title}
      </Text>
    </Flex>
  )
}

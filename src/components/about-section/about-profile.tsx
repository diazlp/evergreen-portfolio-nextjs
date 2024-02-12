import React, { Fragment } from 'react'
import {
  VStack,
  Text,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { GoTriangleRight } from 'react-icons/go'

export default function AboutProfile(): React.ReactNode {
  const { t } = useTranslation()

  return (
    <Fragment>
      <Text
        color={useColorModeValue('black', 'gray.300')}
        letterSpacing={1}
        fontWeight={useColorModeValue('medium', 'initial')}
      >
        {t('hello')}! 👋 {t('profile-1')}
      </Text>

      <Text
        color={useColorModeValue('black', 'gray.300')}
        letterSpacing={1}
        fontWeight={useColorModeValue('medium', 'initial')}
      >
        {t('profile-2')}
      </Text>

      <Text
        color={useColorModeValue('black', 'gray.300')}
        letterSpacing={1}
        fontWeight={useColorModeValue('medium', 'initial')}
      >
        {t('profile-3')}
      </Text>

      <List
        color={useColorModeValue('black', 'gray.300')}
        letterSpacing={1}
        fontWeight={useColorModeValue('medium', 'initial')}
        display="flex"
        minW={{ base: '100%' }}
        gap={10}
      >
        <VStack align="left">
          <ListItem>
            <ListIcon as={GoTriangleRight} color="green.500" />
            JavaScript (ES6+)
          </ListItem>
          <ListItem>
            <ListIcon as={GoTriangleRight} color="green.500" />
            Next.js
          </ListItem>
          <ListItem>
            <ListIcon as={GoTriangleRight} color="green.500" />
            React
          </ListItem>
        </VStack>

        <VStack align="left">
          <ListItem>
            <ListIcon as={GoTriangleRight} color="green.500" />
            TypeScript
          </ListItem>
          <ListItem>
            <ListIcon as={GoTriangleRight} color="green.500" />
            Node.js
          </ListItem>
          <ListItem>
            <ListIcon as={GoTriangleRight} color="green.500" />
            NestJS
          </ListItem>
        </VStack>
      </List>
    </Fragment>
  )
}

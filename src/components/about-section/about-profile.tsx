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
import ExperienceProfile from './experience-profile'

export default function AboutProfile(): React.ReactNode {
  const { t } = useTranslation()

  return (
    <Fragment>
      <Text
        color={useColorModeValue('black', 'gray.300')}
        letterSpacing={1}
        fontWeight={useColorModeValue('medium', 'initial')}
        userSelect="none"
      >
        {t('about-profile-0')}! 👋 {t('about-profile-1')}
      </Text>

      <Text
        color={useColorModeValue('black', 'gray.300')}
        letterSpacing={1}
        fontWeight={useColorModeValue('medium', 'initial')}
        userSelect="none"
      >
        {t('about-profile-2')}
      </Text>

      <Text
        color={useColorModeValue('black', 'gray.300')}
        letterSpacing={1}
        fontWeight={useColorModeValue('medium', 'initial')}
        userSelect="none"
      >
        {t('about-profile-3')}
      </Text>

      <List
        color={useColorModeValue('black', 'gray.300')}
        letterSpacing={1}
        fontWeight={useColorModeValue('medium', 'initial')}
        display="flex"
        minW={{ base: '100%' }}
        gap={10}
        userSelect="none"
      >
        <VStack align="left">
          {['JavaScript (ES6+)', 'Next.js', 'React'].map((item, index) => (
            <ListItem key={index}>
              <ListIcon
                as={GoTriangleRight}
                color={useColorModeValue('green', 'brand.100')}
              />
              {item}
            </ListItem>
          ))}
        </VStack>

        <VStack align="left">
          {['TypeScript', 'Node.js', 'NestJS'].map((item, index) => (
            <ListItem key={index}>
              <ListIcon
                as={GoTriangleRight}
                color={useColorModeValue('green', 'brand.100')}
              />
              {item}
            </ListItem>
          ))}
        </VStack>
      </List>

      <VStack w="full" marginTop={20} gap={10}>
        <ExperienceProfile />
      </VStack>
    </Fragment>
  )
}

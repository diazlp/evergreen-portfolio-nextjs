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
import EducationProfile from './education-profile'

export default function AboutProfile(): React.ReactNode {
  const { t } = useTranslation()
  const textAboutColor = useColorModeValue('black', 'gray.300')
  const textAboutWeight = useColorModeValue('medium', 'initial')

  return (
    <Fragment>
      <Text
        color={textAboutColor}
        letterSpacing={1}
        fontWeight={textAboutWeight}
        userSelect="none"
      >
        {t('about-profile-0')}! 👋 {t('about-profile-1')}
      </Text>

      <Text
        color={textAboutColor}
        letterSpacing={1}
        fontWeight={textAboutWeight}
        userSelect="none"
      >
        {t('about-profile-2')}
      </Text>

      <Text
        color={textAboutColor}
        letterSpacing={1}
        fontWeight={textAboutWeight}
        userSelect="none"
      >
        {t('about-profile-3')}
      </Text>

      <List
        color={textAboutColor}
        letterSpacing={1}
        fontWeight={textAboutWeight}
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
                _light={{
                  color: 'green',
                }}
                _dark={{
                  color: 'brand.100',
                }}
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
                _light={{
                  color: 'green',
                }}
                _dark={{
                  color: 'brand.100',
                }}
              />
              {item}
            </ListItem>
          ))}
        </VStack>
      </List>

      <Text
        color={textAboutColor}
        letterSpacing={1}
        fontWeight={textAboutWeight}
        userSelect="none"
      >
        {t('about-profile-4')} ⛳
      </Text>

      <VStack w="full" marginTop={20} gap={10}>
        <ExperienceProfile />
      </VStack>

      <VStack w="full" marginTop={20} gap={10}>
        <EducationProfile />
      </VStack>
    </Fragment>
  )
}

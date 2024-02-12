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
        Hello 👋 My name is Diaz and I'm passionate about crafting things other
        people can resonate with. My journey into programming began during my
        college days when I was introduced to Python for Data Science as part of
        the curriculum. Soon after, I taught myself web development and fell in
        love at first sight.
      </Text>

      <Text
        color={useColorModeValue('black', 'gray.300')}
        letterSpacing={1}
        fontWeight={useColorModeValue('medium', 'initial')}
      >
        I've always been drawn to writing, and as a Software Developer, I've
        found an unique way to express myself. Knowing that others will interact
        with my work, I strive to ensure it's of the highest quality. I
        prioritize writing maintainable and scalable code, ensuring a smooth
        experience for both users and fellow developers.
      </Text>

      <Text
        color={useColorModeValue('black', 'gray.300')}
        letterSpacing={1}
        fontWeight={useColorModeValue('medium', 'initial')}
      >
        While I've had exposure to quite a few technologies, each one has
        provided me with a broader perspective. Here are some of the
        technologies I'm proficient in:
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

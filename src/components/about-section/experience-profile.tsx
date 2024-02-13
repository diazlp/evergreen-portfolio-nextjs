import React, { Fragment } from 'react'
import {
  VStack,
  Text,
  HStack,
  Heading,
  useColorModeValue,
  Tag,
} from '@chakra-ui/react'

export default function ExperienceProfile(): React.ReactNode {
  return (
    <Fragment>
      {/* Tomei Consolidated Bhd */}
      <HStack
        w="full"
        justify="flex-start"
        gap={4}
        userSelect="none"
        cursor="pointer"
      >
        <VStack alignSelf="flex-start" align="start" w="30%">
          <Text color={useColorModeValue('black', 'gray.500')}>
            JUL 2022 - PRESENT
          </Text>
        </VStack>

        <VStack flex="1" align="start">
          <Heading fontSize="medium">Full-stack Developer</Heading>
          <Heading fontSize="medium" fontWeight="medium">
            Tomei Consolidated Bhd
          </Heading>
          <Text color={useColorModeValue('black', 'gray.500')}>
            Collaborate closely with cross-functional teams to develop and
            deploy both internal and customer-facing interfaces used by numerous
            of store outlets and customers across Malaysia. Spearhead the
            implementation of Websocket and WebRTC protocols to enable direct
            communication capabilities. Day-to-day responsibilities include
            implementing new features, addressing maintenance tasks such as bug
            fixes and performance optimizations, and deploying updates to Azure
            Web Service PaaS infrastructure.
          </Text>
          <HStack gap={2} flexWrap="wrap">
            {[
              'TypeScript',
              'JavaScript',
              'React',
              'Next.js',
              'React Native',
              'Node.js',
              'NestJS',
              'Socket.IO',
            ].map((item, index) => (
              <Tag
                key={index}
                color={useColorModeValue('white', 'black')}
                bgColor={useColorModeValue('purple', 'brand.100')}
              >
                {item}
              </Tag>
            ))}
          </HStack>
        </VStack>
      </HStack>

      {/* Sanbercode */}
      <HStack
        w="full"
        justify="flex-start"
        gap={4}
        userSelect="none"
        cursor="pointer"
      >
        <VStack alignSelf="flex-start" align="start" w="30%">
          <Text color={useColorModeValue('black', 'gray.500')}>
            OCT 2021 - APR 2022
          </Text>
        </VStack>

        <VStack flex="1" align="start">
          <Heading fontSize="medium">
            Assistant Trainer - Python Data Science
          </Heading>
          <Heading fontSize="medium" fontWeight="medium">
            Sanbercode
          </Heading>
          <Text color={useColorModeValue('black', 'gray.500')}>
            Contributed to the delivery of Python Data Science courses by
            working closely with the lead trainer. Responsible to facilitate
            group counseling sessions to support students in reaching their
            academic goals and monitored their progress throughout the duration
            of the course.
          </Text>
          <HStack gap={2} flexWrap="wrap">
            {['Python', 'Pandas', 'Matplotlib', 'NLP'].map((item, index) => (
              <Tag
                key={index}
                color={useColorModeValue('white', 'black')}
                bgColor={useColorModeValue('purple', 'brand.100')}
              >
                {item}
              </Tag>
            ))}
          </HStack>
        </VStack>
      </HStack>
    </Fragment>
  )
}

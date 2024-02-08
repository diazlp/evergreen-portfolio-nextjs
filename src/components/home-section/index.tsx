import React from 'react'
import { Variants, motion } from 'framer-motion'
import {
  Container,
  Stack,
  VStack,
  Heading,
  Divider,
  Text,
  HStack,
  Link,
  Button,
  Center,
  Mark,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactTyped } from 'react-typed'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GITHUB_LINK, LINKEDIN_LINK } from '@/utils/constants'

const variants: Variants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 40,
    transition: { duration: 1, type: 'easeOut' },
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1, type: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: 0,
    y: -40,
    transition: { duration: 1, type: 'easeOut' },
  },
}

export default function HomeSection(): React.ReactNode {
  return (
    <Container
      as={motion.div}
      display="flex"
      maxW="container.lg"
      minH={{ base: 'auto', md: '100vh' }}
      px={{ base: 4, lg: 8 }}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      centerContent
    >
      <Stack
        spacing={4}
        py={12}
        align="center"
        h="100vh"
        w="100%"
        direction={{ base: 'column', md: 'row' }}
      >
        <VStack
          spacing={2}
          align="start"
          w={{ base: '100%', md: '50%' }}
          py={{ base: 20, md: 0 }}
          userSelect="none"
        >
          <Heading as="h1">
            <ReactTyped
              startWhenVisible
              strings={['Diaz Linggaputra']}
              typeSpeed={70}
              startDelay={1000}
              cursorChar="_"
            />
          </Heading>
          <Divider />

          <Text color="gray.500" align="justify">
            {/* <Trans i18nKey='excerpt'>
              <strong>Student</strong> by day, <strong>mad developer</strong> by
              night. Passionate about computer science and{' '}
              <strong>new technologies</strong>, currently{' '}
              <ExternalLink href='https://nextjs.org/'>Next.js</ExternalLink> &{' '}
              <ExternalLink href='https://chakra-ui.com/'>
                Chakra UI
              </ExternalLink>
              , I develop in order to propose different{' '}
              <strong>opensource</strong> contents.
            </Trans> */}
            <strong>Welcome to my digital realm!</strong> I am a &#8202;
            <Mark color={useColorModeValue('black', 'white')} fontWeight="bold">
              Software Developer
            </Mark>
            &#8202; dedicated to crafting refined solutions that sculpt seamless
            user experiences, striving to pursue excellence in my work and
            delivering exceptional result
          </Text>
          <HStack
            spacing={4}
            w="full"
            justify={{ base: 'center', md: 'flex-start' }}
          >
            <Link href={LINKEDIN_LINK} isExternal>
              <Button
                colorScheme="brand"
                variant="ghost"
                leftIcon={<FaLinkedin />}
              >
                LinkedIn
              </Button>
            </Link>
            <Link href={GITHUB_LINK} isExternal>
              <Button
                colorScheme="brand"
                variant="ghost"
                leftIcon={<FaGithub />}
              >
                Github
              </Button>
            </Link>
          </HStack>
        </VStack>
        <Center w={{ base: '100%', md: '50%' }}>
          {/* <CustomImage
            src='/assets/images/home.jpg'
            width={300}
            height={500}
            alt='Cover Image'
          /> */}
          uhui
        </Center>
      </Stack>
    </Container>
  )
}

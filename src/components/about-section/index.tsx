import React from 'react'
import { Variants, motion } from 'framer-motion'
import { Container, Stack, VStack, Spacer } from '@chakra-ui/react'
import AboutProfile from './about-profile'
import BasicProfile from './basic-profile'
import SocialProfile from './social-profile'

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

export default function AboutSection(): React.ReactNode {
  return (
    <>
      <Container
        as={motion.div}
        display="flex"
        maxW="full"
        maxH="full"
        px={{ base: 0, md: 20 }}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        centerContent
      >
        <Stack
          position="relative"
          spacing={4}
          py={'20'}
          top={{ base: 0, md: 19 }}
          justify="center"
          alignItems="flex-start"
          direction={{ base: 'column', md: 'row' }}
        >
          <VStack
            spacing={2}
            align="start"
            position="sticky"
            top={'15vh'}
            w={{ base: '100%', md: '40%' }}
            minH="73vh"
            py={{ base: 20, md: 0 }}
            userSelect="none"
          >
            <BasicProfile />
            <Spacer />
            <SocialProfile />
          </VStack>

          <VStack
            position="relative"
            justify="start"
            align="start"
            px={{ base: 'auto', md: 10 }}
            w={{ base: '100%', md: '50%' }}
            display={{ base: 'none', md: 'flex' }}
            gap={5}
          >
            <AboutProfile />
          </VStack>
        </Stack>
      </Container>
    </>
  )
}

import React from 'react'
import { Variants, motion } from 'framer-motion'
import { Container, Stack, VStack, Spacer } from '@chakra-ui/react'
import { Raindrop } from '@/hooks/useProject'
import BasicProfile from '../basic-profile'
import SkillProfile from './skill-profile'
import MainPortfolio from './main-portfolio'

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

export default function ProjectSection({
  isLoading,
  projects,
}: {
  isLoading: boolean
  projects: Raindrop[]
}): React.ReactNode {
  return (
    <Container
      as={motion.div}
      display="flex"
      maxW="full"
      maxH="full"
      px={{ base: 10, md: 20 }}
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
        fontSize={{ base: 'small', md: 'initial' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <VStack
          spacing={2}
          align="start"
          position={{ base: 'initial', md: 'sticky' }}
          top={'15vh'}
          w={{ base: '100%', md: '40%' }}
          minH="73vh"
          py={{ base: 20, md: 0 }}
          userSelect="none"
        >
          <BasicProfile />
          <Spacer />
          <SkillProfile />
        </VStack>

        <VStack
          position="relative"
          justify="start"
          align="start"
          px={{ base: 'auto', md: 10 }}
          w={{ base: '100%', md: '50%' }}
          gap={5}
        >
          <MainPortfolio isLoading={isLoading} projects={projects} />
        </VStack>
      </Stack>
    </Container>
  )
}

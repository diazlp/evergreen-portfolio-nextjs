import React from 'react'
import { Variants, motion } from 'framer-motion'
import { Container, Stack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import CoreInformationComponent from './core-info'
import SideNavigation from '../side-navigation'

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
  const { t } = useTranslation()

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
        justify="center"
        h="100vh"
        w="100%"
        direction={{ base: 'column', md: 'row' }}
      >
        <CoreInformationComponent />
        <SideNavigation />
      </Stack>
    </Container>
  )
}

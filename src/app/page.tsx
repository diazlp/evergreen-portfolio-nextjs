'use client'

import '@/i18n/settings'
import React from 'react'
import { Box } from '@chakra-ui/react'
import HeaderSection from '@/components/header-section'
import HomeSection from '@/components/home-section'

export default function Home(): React.ReactNode {
  return (
    <Box>
      <HeaderSection />
      <HomeSection />
      {/* <Box p={4}>
        <Heading size="lg">Projects</Heading>
        <Box mt={4}>Project 1</Box>
        <Box mt={4}>Project 2</Box>
        <Box mt={4}>Project 3</Box>
      </Box>
      <Box bg="gray.100" py={4} textAlign="center">
        <Heading size="md">Footer</Heading>
      </Box> */}
    </Box>
  )
}

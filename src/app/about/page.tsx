'use client'

import React from 'react'
import { Box } from '@chakra-ui/react'
import HeaderSection from '@/components/header-section'
import AboutSection from '@/components/about-section'

export default function About(): React.ReactNode {
  return (
    <Box overflow="hidden">
      <HeaderSection />
      <AboutSection />
    </Box>
  )
}

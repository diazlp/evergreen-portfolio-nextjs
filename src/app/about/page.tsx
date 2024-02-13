'use client'

import React, { Fragment } from 'react'
import { Box } from '@chakra-ui/react'
import AboutSection from '@/components/about-section'
import FooterSection from '@/components/footer-section'

export default function About(): React.ReactNode {
  return (
    <Box>
      <AboutSection />
      <FooterSection>diazlinggaputra@gmail.com</FooterSection>
    </Box>
  )
}

'use client'

import '@/i18n/settings'
import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import HomeSection from '@/components/home-section'
import FooterSection from '@/components/footer-section'

export default function Home(): React.ReactNode {
  return (
    <Box overflow="hidden">
      <HomeSection />
      <FooterSection>&copy; 2024 Diaz Linggaputra</FooterSection>
    </Box>
  )
}

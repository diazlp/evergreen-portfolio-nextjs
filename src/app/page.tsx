'use client'

import '@/i18n/settings'
import React from 'react'
import { Box } from '@chakra-ui/react'
import HeaderSection from '@/components/header-section'
import HomeSection from '@/components/home-section'

export default function Home(): React.ReactNode {
  return (
    <Box overflow="hidden">
      <HeaderSection />
      <HomeSection />
    </Box>
  )
}

'use client'

import '@/i18n/settings'
import React from 'react'
import { Box } from '@chakra-ui/react'
import HomeSection from '@/components/home-section'

export default function Home(): React.ReactNode {
  return (
    <Box overflow="hidden">
      <HomeSection />
    </Box>
  )
}

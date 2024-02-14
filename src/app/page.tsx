'use client'

import '@/i18n/settings'
import React from 'react'
import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import HomeSection from '@/components/home-section'
import FooterSection from '@/components/footer-section'

export default function Home(): React.ReactNode {
  return (
    <Box overflow="hidden">
      <HomeSection />
      <FooterSection>
        <Text sx={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}>
          <Text as="span" color={useColorModeValue('green', 'brand.100')}>
            &copy; 2024 Diaz Linggaputra
          </Text>
        </Text>
      </FooterSection>
    </Box>
  )
}

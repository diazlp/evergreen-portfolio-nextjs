'use client'

import React from 'react'
import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import AboutSection from '@/components/about-section'
import FooterSection from '@/components/footer-section'

export default function About(): React.ReactNode {
  return (
    <Box>
      <AboutSection />
      <FooterSection>
        <Text sx={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}>
          <Text as="span" color={useColorModeValue('green', 'brand.100')}>
            diazlinggaputra@gmail.com
          </Text>
        </Text>
      </FooterSection>
    </Box>
  )
}

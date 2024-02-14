'use client'

import React from 'react'
import { Box, VStack, Link, useColorModeValue } from '@chakra-ui/react'
import ProjectSection from '@/components/project-section'
import FooterSection from '@/components/footer-section'
import { FaGithub, FaLinkedin, FaMedium, FaWhatsapp } from 'react-icons/fa'
import { GITHUB_LINK, LINKEDIN_LINK, WHATSAPP_LINK } from '@/utils/constants'

export default function Project(): React.ReactNode {
  return (
    <Box>
      <ProjectSection />
      <FooterSection>
        <VStack
          gap={5}
          fontSize={{ base: 'initial', md: 'large', xl: 'x-large' }}
          transform="rotate(180deg)"
          color={useColorModeValue('green', 'brand.100')}
        >
          <Link
            href={WHATSAPP_LINK}
            isExternal
            _hover={{
              transform: 'scale(1.2)',
              color: useColorModeValue('green', 'brand.100'),
            }}
          >
            <FaWhatsapp />
          </Link>
          <Link
            href={LINKEDIN_LINK}
            isExternal
            _hover={{
              transform: 'scale(1.2)',
              color: useColorModeValue('green', 'brand.100'),
            }}
          >
            <FaLinkedin />
          </Link>
          <Link
            href={GITHUB_LINK}
            isExternal
            _hover={{
              transform: 'scale(1.2)',
              color: useColorModeValue('green', 'brand.100'),
            }}
          >
            <FaGithub />
          </Link>
        </VStack>
      </FooterSection>
    </Box>
  )
}

'use client'

import React from 'react'
import { HStack, Flex } from '@chakra-ui/react'
import ThemeButtonComponent from './theme-button'
import LanguageSelectorComponent from './language-selector'

export default function HeaderSection(): React.ReactNode {
  return (
    <HStack
      as="header"
      position="fixed"
      top="0"
      px={8}
      py={6}
      zIndex="tooltip"
      justify="space-between"
      align="center"
      alignItems="center"
      w="100%"
      backdropFilter="blur(3px)"
    >
      <ThemeButtonComponent />

      <Flex as="div" align="center" justify="space-between" gap={5}>
        <LanguageSelectorComponent />
      </Flex>
    </HStack>
  )
}

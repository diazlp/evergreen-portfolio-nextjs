import React from 'react'
import { HStack, Heading, Flex } from '@chakra-ui/react'
import ThemeButtonComponent from './theme-button'
import LanguageSelectorComponent from './language-selector'

export default function HeaderSection(): React.ReactNode {
  return (
    <HStack
      as="header"
      position="fixed"
      top="0"
      p={8}
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
        {/* <Heading size="md">Test</Heading> */}
      </Flex>
    </HStack>
  )
}

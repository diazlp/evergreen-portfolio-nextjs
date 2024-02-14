'use client'

import React from 'react'
import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig,
  // ColorModeScript,
  theme as base,
} from '@chakra-ui/react'
import '@fontsource/roboto-mono'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const colors = {
  brand: {
    100: '#64fed9',
  },
}

const fonts = {
  heading: `Roboto Mono, ${base.fonts.heading}`,
}

const theme = extendTheme({
  colors,
  config,
  fonts,
})

export default function UIProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
      {children}
    </ChakraProvider>
  )
}

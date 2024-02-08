'use client'

import React from 'react'
import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig,
  ColorModeScript,
  theme as base,
} from '@chakra-ui/react'
import '@fontsource/roboto-mono/700.css'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const fonts = {
  heading: `Roboto Mono, ${base.fonts.heading}`,
}

const theme = extendTheme({ config, fonts })

export default function UIProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  )
}

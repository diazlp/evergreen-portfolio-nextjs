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
import { CSSObject } from '@emotion/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
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
  styles: {
    global: (props: CSSObject) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#0f172a' : 'white',
      },
    }),
  },
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

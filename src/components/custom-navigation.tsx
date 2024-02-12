'use client'

import React, { useState } from 'react'
import { Heading, Divider, Flex, useColorModeValue } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, Variants, motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'

const flexVariants: Variants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      // delayChildren: 3,
    },
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      staggerChildren: 1,
    },
  },
}

const itemVariants: Variants = {
  initial: { x: '-100%', opacity: 0 },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
    },
  },
  exit: {
    x: 100,
    opacity: 0,
  },
}

export default function CustomNavigation(): React.ReactNode {
  const { t } = useTranslation()

  const pathname = usePathname()
  const router = useRouter()
  const [routePath, setRoutePath] = useState<string>(pathname)

  const routes: {
    path: string
    text: string
  }[] = [
    { path: '/', text: `01 ${t('home')}` },
    { path: '/project', text: `02 ${t('project')}` },
    { path: '/about', text: `03 ${t('about')}` },
    { path: '/contact', text: `04 ${t('contact')}` },
  ]

  return (
    <AnimatePresence mode="wait" initial>
      <Flex
        as={motion.div}
        direction="column"
        marginTop={5}
        gap={3}
        // letterSpacing={12}
        cursor="pointer"
        userSelect="none"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={flexVariants}
        key={routePath}
      >
        {routes.map((route, index) => (
          <motion.div
            key={index}
            whileHover={{
              x: 40,
              transition: {
                type: 'tween',
              },
            }}
            whileTap={{
              opacity: 0,
              x: -100,
              transition: {
                type: 'tween',
              },
            }}
            variants={itemVariants}
            onClick={() => {
              setRoutePath(route.path)
              router.push(route.path)
            }}
          >
            <Heading
              fontWeight="normal"
              fontSize="large"
              color={
                pathname === route.path
                  ? useColorModeValue('purple', 'orange')
                  : ''
              }
            >
              {route.text}
            </Heading>
          </motion.div>
        ))}
      </Flex>
    </AnimatePresence>
  )
}

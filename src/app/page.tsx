'use client'

import React from 'react'
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import HeaderSection from '@/components/header-section'

const MotionFlex = motion(Flex)

export default function Home(): React.ReactNode {
  return (
    <Box>
      <HeaderSection />
      <Box p={4}>
        <MotionFlex
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: -30 }}
          transition={{ duration: 1 }}
          direction="column"
          align="center"
          justify="center"
          height="80vh"
        >
          <Heading size="xl">Welcome to My Portfolio</Heading>
          <Button mt={4} colorScheme="teal">
            Contact Me
          </Button>
        </MotionFlex>
      </Box>
      <Box p={4}>
        <Heading size="lg">Projects</Heading>
        {/* Replace this with your project showcase */}
        <Box mt={4}>Project 1</Box>
        <Box mt={4}>Project 2</Box>
        <Box mt={4}>Project 3</Box>
      </Box>
      <Box bg="gray.100" py={4} textAlign="center">
        <Heading size="md">Footer</Heading>
      </Box>
    </Box>
  )
}

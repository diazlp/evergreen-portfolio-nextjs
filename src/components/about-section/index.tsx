import React from 'react'
import { Variants, motion } from 'framer-motion'
import {
  Container,
  Stack,
  VStack,
  Heading,
  Divider,
  Text,
  Mark,
  useColorModeValue,
} from '@chakra-ui/react'
import CustomNavigation from '../custom-navigation'
import AboutProfile from './about-profile'

const variants: Variants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 40,
    transition: { duration: 1, type: 'easeOut' },
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1, type: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: 0,
    y: -40,
    transition: { duration: 1, type: 'easeOut' },
  },
}

export default function AboutSection(): React.ReactNode {
  return (
    <>
      <Container
        as={motion.div}
        display="flex"
        maxW="full"
        // maxH={{ base: 'auto', md: '100vh' }}
        maxH="full"
        px={{ base: 0, md: 20 }}
        marginTop={{ base: 0, md: 8 }}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        centerContent
      >
        <Stack
          spacing={4}
          py={'20'}
          align="center"
          justify="center"
          alignItems="flex-start"
          h="100vh"
          w="100%"
          direction={{ base: 'column', md: 'row' }}
        >
          <VStack
            spacing={2}
            align="start"
            w={{ base: '100%', md: '40%' }}
            py={{ base: 20, md: 0 }}
            userSelect="none"
          >
            <Heading size="2xl">
              Diaz Linggaputra
              <Divider />
            </Heading>

            <Text
              color={useColorModeValue('black', 'white')}
              align="justify"
              fontSize="xl"
              fontWeight="medium"
            >
              Full-stack Developer at Tomei Consolidated Bhd
            </Text>

            <Text color="gray.500" align="justify">
              <Mark
                color={useColorModeValue('black', 'white')}
                fontWeight="bold"
              >
                Software Developer
              </Mark>{' '}
              at mind,{' '}
              <Mark
                color={useColorModeValue('black', 'white')}
                fontWeight="bold"
              >
                Entrepreneur
              </Mark>{' '}
              at heart. <br />I approach every work with long-term vision and
              adaptibility.
            </Text>

            <CustomNavigation />
          </VStack>
          <VStack
            justify="start"
            align="start"
            px={{ base: 'auto', md: 10 }}
            w={{ base: '100%', md: '50%' }}
            display={{ base: 'none', md: 'flex' }}
            gap={5}
          >
            <AboutProfile />
            {/* <Flex
              as={motion.div}
              direction="column"
              gap={12}
              letterSpacing={12}
              cursor="pointer"
              userSelect="none"
              initial="initial"
              animate="enter"
              exit="exit"
            >
              uhui
            </Flex> */}
          </VStack>
        </Stack>
      </Container>
    </>
  )
}

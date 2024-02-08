import React from 'react'
import { Variants, motion } from 'framer-motion'
import {
  Container,
  Stack,
  VStack,
  Heading,
  Divider,
  Text,
  HStack,
  Link,
  Button,
  Center,
  Mark,
  useColorModeValue,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { ReactTyped } from 'react-typed'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineFileDownload } from 'react-icons/md'
import {
  GITHUB_LINK,
  LINKEDIN_LINK,
  CV_LINK_INTERNAL,
  CV_LINK_EXTERNAL,
} from '@/utils/constants'

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

export default function HomeSection(): React.ReactNode {
  const { t } = useTranslation()

  // const onDownloadCVHandler = () => {
  //   const url = './diazlinggaputra-cv.pdf'
  //   window.open(url, '_blank')
  // }

  return (
    <Container
      as={motion.div}
      display="flex"
      maxW="container.lg"
      minH={{ base: 'auto', md: '100vh' }}
      px={{ base: 4, lg: 8 }}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      centerContent
    >
      <Stack
        spacing={4}
        py={12}
        align="center"
        h="100vh"
        w="100%"
        direction={{ base: 'column', md: 'row' }}
      >
        <VStack
          spacing={2}
          align="start"
          w={{ base: '100%', md: '50%' }}
          py={{ base: 20, md: 0 }}
          userSelect="none"
        >
          <Heading as="h1">
            <ReactTyped
              startWhenVisible
              strings={['Diaz Linggaputra']}
              typeSpeed={70}
              startDelay={1000}
              cursorChar="_"
            />
          </Heading>
          <Divider />

          <Text color="gray.500" align="justify">
            <strong>{t('welcome to my digital realm')}</strong> {t('i am a')}{' '}
            &#8202;
            <Mark color={useColorModeValue('black', 'white')} fontWeight="bold">
              Software Developer
            </Mark>
            &#8202;{' '}
            {t(
              'dedicated to crafting refined solutions that sculpt seamless user experiences, striving to pursue excellence in my work and delivering exceptional result',
            )}
          </Text>
          <HStack
            spacing={4}
            w="full"
            justify={{ base: 'center', md: 'flex-start' }}
          >
            <Link href={LINKEDIN_LINK} isExternal>
              <Button
                colorScheme="brand"
                variant="ghost"
                leftIcon={<FaLinkedin />}
              >
                LinkedIn
              </Button>
            </Link>
            <Link href={GITHUB_LINK} isExternal>
              <Button
                colorScheme="brand"
                variant="ghost"
                leftIcon={<FaGithub />}
              >
                Github
              </Button>
            </Link>
            <Link
              as={'a'}
              href={CV_LINK_EXTERNAL}
              isExternal
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.open(CV_LINK_INTERNAL, '_blank')}
            >
              <Button
                colorScheme="brand"
                variant="ghost"
                leftIcon={<MdOutlineFileDownload />}
              >
                CV
              </Button>
            </Link>
          </HStack>
        </VStack>
        <Center w={{ base: '100%', md: '50%' }}>
          {/* <CustomImage
            src='/assets/images/home.jpg'
            width={300}
            height={500}
            alt='Cover Image'
          /> */}
          uhui
        </Center>
      </Stack>
    </Container>
  )
}

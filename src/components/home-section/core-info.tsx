import React from 'react'
import {
  VStack,
  Heading,
  Divider,
  Text,
  HStack,
  Link,
  Button,
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

export default function CoreInformationComponent(): React.ReactNode {
  const { t } = useTranslation()

  return (
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
        <strong>{t('core-info-1')}</strong> {t('core-info-2')}&#8202;
        <Mark color={useColorModeValue('black', 'white')} fontWeight="bold">
          Software Developer
        </Mark>
        &#8202; {t('core-info-3')}
      </Text>
      <HStack
        spacing={4}
        w="full"
        justify={{ base: 'center', md: 'flex-start' }}
      >
        <Link href={LINKEDIN_LINK} isExternal>
          <Button colorScheme="brand" variant="ghost" leftIcon={<FaLinkedin />}>
            LinkedIn
          </Button>
        </Link>
        <Link href={GITHUB_LINK} isExternal>
          <Button colorScheme="brand" variant="ghost" leftIcon={<FaGithub />}>
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
  )
}

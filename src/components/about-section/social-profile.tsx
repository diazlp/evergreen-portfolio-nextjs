import React from 'react'
import { HStack, Link } from '@chakra-ui/react'
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaQuora,
  FaStackOverflow,
  FaMedium,
  FaWhatsapp,
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import {
  GITHUB_LINK,
  LINKEDIN_LINK,
  EMAIL_LINK,
  INSTAGRAM_LINK,
  QUORA_LINK,
  STACKOVERFLOW_LINK,
  MEDIUM_LINK,
  WHATSAPP_LINK,
} from '@/utils/constants'

export default function SocialProfile(): React.ReactNode {
  return (
    <HStack gap={5} fontSize={{ base: 'initial', md: 'large', xl: 'x-large' }}>
      <Link href={GITHUB_LINK} isExternal>
        <FaGithub />
      </Link>
      <Link href={LINKEDIN_LINK} isExternal>
        <FaLinkedin />
      </Link>
      <Link href={INSTAGRAM_LINK} isExternal>
        <FaInstagram />
      </Link>
      <Link href={EMAIL_LINK} isExternal>
        <MdEmail />
      </Link>
      <Link href={QUORA_LINK} isExternal>
        <FaQuora />
      </Link>
      <Link href={STACKOVERFLOW_LINK} isExternal>
        <FaStackOverflow />
      </Link>
      <Link href={MEDIUM_LINK} isExternal>
        <FaMedium />
      </Link>
      <Link href={WHATSAPP_LINK} isExternal>
        <FaWhatsapp />
      </Link>
    </HStack>
  )
}

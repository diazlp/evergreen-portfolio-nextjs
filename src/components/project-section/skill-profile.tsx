import React from 'react'
import { HStack, Link, Tooltip } from '@chakra-ui/react'
import { FaNodeJs } from 'react-icons/fa'
import { IoLogoJavascript, IoLogoReact } from 'react-icons/io5'
import { BiLogoTypescript, BiLogoPostgresql } from 'react-icons/bi'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb, SiTailwindcss } from 'react-icons/si'

export default function SkillProfile(): React.ReactNode {
  return (
    <HStack gap={5} fontSize={{ base: 'initial', md: 'large', xl: 'x-large' }}>
      <Tooltip label="JavaScript">
        <Link
          _hover={{
            transform: 'scale(1.2)',
            color: 'yellow',
          }}
        >
          <IoLogoJavascript size={23} />
        </Link>
      </Tooltip>

      <Tooltip label="TypeScript">
        <Link
          _hover={{
            transform: 'scale(1.2)',
            color: 'blue.500',
          }}
        >
          <BiLogoTypescript size={25} />
        </Link>
      </Tooltip>

      <Tooltip label="React">
        <Link
          _hover={{
            transform: 'scale(1.2)',
            color: 'blue.200',
          }}
        >
          <IoLogoReact />
        </Link>
      </Tooltip>

      <Tooltip label="Next.js">
        <Link
          _hover={{
            transform: 'scale(1.2)',
            color: 'black',
          }}
        >
          <TbBrandNextjs />
        </Link>
      </Tooltip>

      <Tooltip label="Node.js">
        <Link
          _hover={{
            transform: 'scale(1.2)',
            color: 'green.400',
          }}
        >
          <FaNodeJs />
        </Link>
      </Tooltip>

      <Tooltip label="MongoDB">
        <Link
          _hover={{
            transform: 'scale(1.2)',
            color: 'green.200',
          }}
        >
          <SiMongodb />
        </Link>
      </Tooltip>

      <Tooltip label="PostgreSQL">
        <Link
          _hover={{
            transform: 'scale(1.2)',
            color: 'blue.700',
          }}
        >
          <BiLogoPostgresql />
        </Link>
      </Tooltip>

      <Tooltip label="TailwindCSS">
        <Link
          _hover={{
            transform: 'scale(1.2)',
            color: 'blue.300',
          }}
        >
          <SiTailwindcss />
        </Link>
      </Tooltip>
    </HStack>
  )
}

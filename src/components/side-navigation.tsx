import React from 'react'
import { Heading, Divider, HStack, Flex } from '@chakra-ui/react'
import { Variants, motion } from 'framer-motion'

const container = {
  hidden: { rotate: 90 },
  show: {
    rotate: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 3,
    },
  },
}

const itemA = {
  hidden: { scale: 0, top: 100 },
  show: { scale: 1, top: 30 },
}

const itemB = {
  hidden: { scale: 0, top: 200 },
  show: { scale: 1, top: 80 },
}

const itemVariants: Variants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
}

export default function SideNavigation(): React.ReactNode {
  return (
    <HStack
      justify="end"
      w={{ base: '100%', md: '50%' }}
      display={{ base: 'none', md: 'flex' }}
    >
      <Flex
        as={motion.div}
        direction="column"
        gap={12}
        letterSpacing={12}
        cursor="pointer"
        userSelect="none"
        // initial={{ opacity: 0, y: -20 }}
        // animate={{ opacity: 1, y: 0 }}
        initial="hidden"
        animate="show"
        variants={container}
        // transition={{ duration: 0.5, delayChildren: 0.2, staggerChildren: 0.2 }}
      >
        <motion.div variants={itemA}>
          <Heading fontWeight="normal">01 HOME</Heading>
          <Divider />
        </motion.div>
        <motion.div variants={itemA}>
          <Heading fontWeight="normal">02 PROJECT</Heading>
          <Divider />
        </motion.div>
        <motion.div variants={itemA}>
          <Heading fontWeight="normal">03 ABOUT</Heading>
          <Divider />
        </motion.div>
        <motion.div variants={itemA}>
          <Heading fontWeight="normal">04 CONTACT</Heading>
        </motion.div>
      </Flex>
    </HStack>
  )
}

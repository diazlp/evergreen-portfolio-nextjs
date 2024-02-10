import React from 'react'
import { Heading, Divider, HStack, Flex } from '@chakra-ui/react'
import { Variants, motion } from 'framer-motion'

const flexVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 3.2,
    },
  },
}

// const itemVariants: Variants = {
//   hidden: { scale: 0, top: 100 },
//   show: { scale: 1, top: 30 },
// }

const itemVariants: Variants = {
  hidden: { x: '100%', opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
    },
  },
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
        variants={flexVariants}
        // transition={{ duration: 0.5, delayChildren: 0.2, staggerChildren: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <Heading fontWeight="normal">01 HOME</Heading>
          <Divider />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Heading fontWeight="normal">02 PROJECT</Heading>
          <Divider />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Heading fontWeight="normal">03 ABOUT</Heading>
          <Divider />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Heading fontWeight="normal">04 CONTACT</Heading>
        </motion.div>
      </Flex>
    </HStack>
  )
}

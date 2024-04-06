'use client'
import React from 'react'
import { Variants, motion } from 'framer-motion'
import MousePointer from '@/components/mouse-pointer'

const pageVariants: Variants = {
  initial: { opacity: 0, y: -20 },
  enter: { opacity: 1, y: 0 },
  exit: {
    opacity: 0,
    y: -20,
  },
}

export default function Template({
  children,
}: {
  children: React.ReactNode
}): React.ReactNode {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear', duration: 0.25 }}
      key="page"
    >
      {children}
      <MousePointer />
    </motion.main>
  )
}

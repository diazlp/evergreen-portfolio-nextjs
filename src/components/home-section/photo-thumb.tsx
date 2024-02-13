'use client'

import React from 'react'
import Image from 'next/image'
import { AnimatePresence, Variants, motion } from 'framer-motion'

const imageVariants: Variants = {
  initial: {
    rotateY: 90,
    transition: {
      duration: 0.75,
    },
  },
  enter: {
    rotateY: 0,
    transition: {
      delay: 3,
      duration: 0.75,
    },
  },
  exit: {
    rotateY: 135,
    transition: {
      duration: 0.75,
    },
  },
}

export default function PhotoThumb(): React.ReactNode {
  return (
    <AnimatePresence mode="wait" initial>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={imageVariants}
      >
        <Image
          src="/assets/images/diazlp-photo.png"
          width={370}
          height={500}
          alt="Diaz Linggaputra Photo"
          className="select-none"
        />
      </motion.div>
    </AnimatePresence>
  )
}

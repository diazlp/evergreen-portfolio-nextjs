'use client'

import React, { useState, useEffect } from 'react'
import { useColorModeValue } from '@chakra-ui/react'

const MousePointer: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const backgroundColor = useColorModeValue(
    'none',
    `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 60%)`,
  )

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const backgroundStyle = {
    background: backgroundColor,
  }

  return (
    <div
      className="fixed top-0 left-0 w-[100vw] h-[100vw] pointer-events-none"
      style={backgroundStyle}
    />
  )
}

export default MousePointer

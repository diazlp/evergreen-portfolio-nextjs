import React from 'react'
import { HStack, Skeleton, Stack } from '@chakra-ui/react'

export default function LoadingSkeleton(): React.ReactNode {
  return (
    <HStack
      w="100%"
      justify="flex-start"
      gap={4}
      userSelect="none"
      cursor="pointer"
    >
      <Skeleton alignSelf="flex-start" w="30%" height="80px" />

      <Stack flex="1">
        <Skeleton alignSelf="start" height="25px" w="100%" />
        <Skeleton alignSelf="start" height="50px" w="100%" />
        <Skeleton alignSelf="start" height="30px" w="100%" />
      </Stack>
    </HStack>
  )
}

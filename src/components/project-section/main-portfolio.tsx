import React, { Fragment } from 'react'
import Image from 'next/image'
import {
  VStack,
  Text,
  HStack,
  Heading,
  Link,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react'
import { Raindrop } from '@/hooks/useProject'
import LoadingSkeleton from './loading-skeleton'

export default function MainPortfolio({
  isLoading,
  projects,
}: {
  isLoading: boolean
  projects: Raindrop[]
}) {
  const mainPortfolioTextColor = useColorModeValue('black', 'gray.500')

  return (
    <Fragment>
      <VStack
        w="full"
        gap={{ base: 10, md: 14 }}
        className="group/list"
        minW="37vw"
      >
        {Array.from({ length: 3 }).map(
          (_, index) => isLoading && <LoadingSkeleton key={index} />,
        )}

        {projects?.length &&
          projects.map((project: Raindrop, i) => {
            return (
              <Link
                href={project.link}
                isExternal
                key={i}
                style={{
                  textDecoration: 'none',
                }}
              >
                <HStack
                  w="full"
                  justify="flex-start"
                  gap={4}
                  userSelect="none"
                  cursor="pointer"
                  className="lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                >
                  <VStack alignSelf="flex-start" align="start" w="30%">
                    <Image
                      src={project.cover}
                      loading="lazy"
                      width={200}
                      height={48}
                      alt={project.title}
                    />
                  </VStack>

                  <VStack flex="1" align="start">
                    <Heading fontSize="medium">{project.title}</Heading>
                    <Heading fontSize="medium" fontWeight="medium">
                      {project.excerpt}
                    </Heading>
                    <Text color={mainPortfolioTextColor}>{project.note}</Text>
                    <HStack gap={2} flexWrap="wrap">
                      {project.tags.map((item, index) => (
                        <Tag
                          key={index}
                          _light={{
                            color: 'white',
                            bgColor: 'purple',
                          }}
                          _dark={{
                            color: 'black',
                            bgColor: 'brand.100',
                          }}
                        >
                          {item}
                        </Tag>
                      ))}
                    </HStack>
                  </VStack>
                </HStack>
              </Link>
            )
          })}
      </VStack>
    </Fragment>
  )
}

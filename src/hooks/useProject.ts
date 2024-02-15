import { useState, useEffect } from 'react'

export interface Raindrop {
  title: string
  note: string
  excerpt: string
  cover: string
  link: string
  tags: string[]
}

const useProject = (): { isLoading: boolean; projects: Raindrop[] } => {
  const [resData, setResData] = useState<any>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const getProjects = async () => {
      setIsLoading(true)
      try {
        const res = await fetch('/api/project')
        const jsonData = await res.json()

        setResData(jsonData)
      } catch (error) {
        // Empty block statement
      } finally {
        setIsLoading(false)
      }
    }

    getProjects()
  }, [])

  const projects: Raindrop[] = resData?.data?.items?.map(
    ({ title, excerpt, cover, link, tags, note }: Raindrop) => ({
      title,
      excerpt,
      note,
      cover,
      link,
      tags,
    }),
  )

  return {
    isLoading,
    projects,
  }
}

export default useProject

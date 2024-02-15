import { type Technology } from '@/types'

export type ProjectCategory = 'Full-stack' | 'Frontend' | 'Backend'

export type TProject = {
  id: string
  title: string
  links: {
    repository: string
    production?: string
  }
  asset: string
  category: ProjectCategory
  description: string[]
  technologies: Technology[]
}

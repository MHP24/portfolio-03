import { type Metadata } from 'next'
import {
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection
} from '@/components'
import { obtainPageMetadata } from '@/actions'

export const generateMetadata = (): Metadata => {
  return obtainPageMetadata()
}

const Page = () => {
  return (
    <>
      <HeroSection/>
      <ExperienceSection/>
      <ProjectsSection/>
      <ContactSection/>
    </>
  )
}

export default Page

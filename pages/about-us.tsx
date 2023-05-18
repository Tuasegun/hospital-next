import React from 'react'
import { Hero } from '../features/AboutComponents'
import { MainContainer, MainLayout } from '@/layouts'
import { Banner } from '@/components'
import { Box } from '@chakra-ui/react'

const AboutUs = () => {
  return (
    <MainLayout>
      <MainContainer>
        <Banner pageTitle="About Us" />
        about content
      </MainContainer>
    </MainLayout>
  )
}

export default AboutUs

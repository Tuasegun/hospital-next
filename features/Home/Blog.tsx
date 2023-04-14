import React from 'react'
import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'

import { MainContainer } from '@/layouts'

export const Blog = () => {
  return (
    <Box as="section" py="5.625rem">
      <MainContainer>
        <Box mb="2.5rem" textAlign={['center', 'center', 'left']}>
          <Text as={'h3'} fontSize="3xl">
            Newsletters, Blogposts, Health Tips
          </Text>
          <Flex
            maxW={['100%', '100%', '35rem']}
            flexDirection={['column', 'column', 'row']}
            my="0.5rem"
            gap="1rem"
          >
            <Box>
              <Box w="70px" h="4px" mx="auto" mt="7px" bg="brand.blue.100" />
            </Box>
            <Text fontSize="mmd">
              We provide general information and discussion to promote
              understanding about various health-related topics.
            </Text>
          </Flex>
        </Box>
        <Flex
          alignItems="center"
          flexDirection={['column', 'column', 'row']}
          gap="2.5rem"
        >
          <BlogCard
            imageLink="https://www.evercare.ng/wp-content/uploads/2023/03/BrainTum.jpg"
            title="BRAIN TUMORS: Types, Causes, Symptoms & Treatments"
          />
          <BlogCard
            imageLink="https://www.evercare.ng/wp-content/uploads/2023/03/BrainTum.jpg"
            title="BRAIN TUMORS: Types, Causes, Symptoms & Treatments"
          />
          <BlogCard
            imageLink="https://www.evercare.ng/wp-content/uploads/2023/03/BrainTum.jpg"
            title="BRAIN TUMORS: Types, Causes, Symptoms & Treatments"
          />
        </Flex>
      </MainContainer>
    </Box>
  )
}

interface BlogCardItems {
  imageLink: string
  title: string
}

const BlogCard = ({ imageLink, title }: BlogCardItems) => {
  return (
    <Stack>
      <Box>
        <Text as="a" href="#">
          <Image src={imageLink} />
        </Text>
      </Box>
      <Text
        href="#"
        as="a"
        color="brand.blue.100"
        textTransform="uppercase"
        fontSize="xs"
        w="fit-content"
      >
        Evercare Blog
      </Text>
      <Text href="#" as="a" fontSize="lg" color="#2D3C53" fontFamily="bold">
        {title}
      </Text>
    </Stack>
  )
}

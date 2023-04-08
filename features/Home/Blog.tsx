import React from 'react'
import { BlogCard } from './BlogCard'
import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'

export const Blog = () => {
  return (
    <Box as="section" py="5.625rem">
      <Box mb="2.5rem">
        <Text as={'h3'} fontSize="3xl">
          Newsletters, Blogposts, Health Tips
        </Text>
        <Flex
          w={['100%', '80%', '60%']}
          flexDirection={['column', 'column', 'row']}
          my="0.5rem"
          gap="1rem"
        >
          <Box w="70px" h="4px" mx="auto" mt="7px" bg="brand.blue.100" />
          <Text>
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
    </Box>
  )
}

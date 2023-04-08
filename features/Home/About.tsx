import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

export const About = () => {
  return (
    <Box as="section" p={['60px 20px', '60px 5px']} bg="brand.purple.200">
      <Flex
        flexDir={['column-reverse', 'column-reverse', 'row']}
        justify="space-between"
      >
        <Flex
          w={['100%', '100%', '45%']}
          direction="column"
          justify="center"
          gap="0.8em"
        >
          <Text as={'h3'} fontSize="3xl">
            Evercare Hospital Lekki
          </Text>
          <Text>
            Evercare hospital Lekki is a 165-bed purpose-built multispecialty,
            tertiary care private hospital in Nigeria. Evercare Hospital Lekki
            offers care across a range of specialty medical and surgical
            services. This is a first of its kind facility in Nigeria and
            delivers high quality, and accessible healthcare to communities in
            Lagos and Nigeria at large.
          </Text>
        </Flex>
        <Box w={['100%', '100%', '45%']} mb={['20px', '0']}>
          <iframe
            width="100%"
            style={{ aspectRatio: '16/9' }}
            src="https://www.youtube.com/embed/D4NOi8QgHHs"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Flex>
    </Box>
  )
}

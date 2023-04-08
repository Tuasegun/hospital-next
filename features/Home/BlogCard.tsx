import { Box, Stack, Text, Image } from '@chakra-ui/react'

interface BlogCardItems {
  imageLink: string
  title: string
}

export const BlogCard = ({ imageLink, title }: BlogCardItems) => {
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
      >
        Evercare Blog
      </Text>
      <Text href="#" as="a" fontSize="lg" color="#2D3C53">
        {title}
      </Text>
    </Stack>
  )
}

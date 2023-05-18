import { Box, Center, Flex, Image, Stack, Text } from '@chakra-ui/react'

import { MainContainer } from '@/layouts'

interface BannerProps {
  pageTitle: string
}

export const Banner = ({ pageTitle }: BannerProps) => {
  return (
    <Flex
      position={'relative'}
      _before={{
        position: 'absolute',
        content: `''`,
        background:
          'linear-gradient(270deg, #002355 48.65%, rgba(0, 35, 85, 0) 80.84%)',
        transform: 'matrix(-1, 0, 0, 1, 0, 0)',
        width: '100%',
        height: '100%',
      }}
      mb={'5rem'}
    >
      <Image src="https://www.evercare.ng/wp-content/uploads/2022/07/ehl-about-us-2.png" />
      <Stack
        position={'absolute'}
        zIndex={2}
        w={'full'}
        h={'full'}
        textAlign={'left'}
        justifyContent={'center'}
      >
        <MainContainer>
          <Text
            as={'h2'}
            color={'brand.white'}
            fontSize={'1.5rem'}
            fontFamily={'bold'}
          >
            {pageTitle}
          </Text>
        </MainContainer>
      </Stack>
    </Flex>
  )
}

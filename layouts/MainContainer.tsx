import React, { PropsWithChildren } from 'react'
import { As, Box, Container, SpaceProps } from '@chakra-ui/react'

interface MainContainerProps extends PropsWithChildren<{}> {
  h?: string
  bg?: string
  as?: As
  noMobilePadding?: boolean
  py?: SpaceProps['py']
  pt?: SpaceProps['pt']
  pb?: SpaceProps['pb']
}

export const MainContainer = ({
  children,
  bg,
  h,
  as,
  py,
  pt,
  pb,
  noMobilePadding,
}: MainContainerProps) => {
  return (
    <Box bg={bg || 'white'} h={h || 'auto'} as={as} py={py} pt={pt} pb={pb}>
      <Container
        px={noMobilePadding ? ['0', '0', '0', '1rem'] : '1rem'}
        maxW={
          noMobilePadding
            ? ['100%', '100%', '100%', 'container.xl']
            : 'container.xl'
        }
      >
        {children}
      </Container>
    </Box>
  )
}

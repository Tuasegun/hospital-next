import React, { PropsWithChildren } from 'react'
import { As, Box, Container, SpaceProps } from '@chakra-ui/react'

interface MainContainerProps extends PropsWithChildren<{}> {
  noMobilePadding?: boolean
}

export const MainContainer = ({
  children,
  noMobilePadding,
}: MainContainerProps) => {
  return (
    // <Box bg={bg || 'white'} h={h || 'auto'} as={as} py={py} pt={pt} pb={pb}>
    //   <Container
    //     px={noMobilePadding ? ['0', '0', '0', '1rem'] : '1rem'}
    //     maxW={
    //       noMobilePadding
    //         ? ['100%', '100%', '100%', 'container.xl']
    //         : 'container.xl'
    //     }
    //   >
    //     {children}
    //   </Container>
    // </Box>
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
  )
}

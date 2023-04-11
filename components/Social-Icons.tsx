import {
  chakra,
  Stack,
  VisuallyHidden,
  useColorModeValue,
  ColorProps,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa'

interface SocialIconProps {
  baseColour?: ColorProps['color']
  hoverColor?: ColorProps['color']
}

export const SocialIcons = ({ baseColour, hoverColor }: SocialIconProps) => {
  return (
    <Stack direction={'row'} spacing={4}>
      <SocialButton
        colors={{
          baseColour,
          hoverColor,
        }}
        label={'Twitter'}
        href={'#'}
      >
        <FaTwitter />
      </SocialButton>
      <SocialButton label={'Facebook'} href={'#'}>
        <FaFacebookF />
      </SocialButton>
      <SocialButton label={'Instagram'} href={'#'}>
        <FaInstagram />
      </SocialButton>
      <SocialButton label={'LinkedIn'} href={'#'}>
        <FaLinkedinIn />
      </SocialButton>
      <SocialButton label={'YouTube'} href={'#'}>
        <FaYoutube />
      </SocialButton>
    </Stack>
  )
}

const SocialButton = ({
  children,
  label,
  href,
  colors,
}: {
  children: ReactNode
  label: string
  href: string
  colors?: SocialIconProps
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={6}
      h={6}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

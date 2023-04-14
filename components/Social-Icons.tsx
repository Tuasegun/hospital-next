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
    <Stack direction={'row'} spacing={2}>
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
      <SocialButton
        colors={{
          baseColour,
          hoverColor,
        }}
        label={'Facebook'}
        href={'#'}
      >
        <FaFacebookF />
      </SocialButton>
      <SocialButton
        colors={{
          baseColour,
          hoverColor,
        }}
        label={'Instagram'}
        href={'#'}
      >
        <FaInstagram />
      </SocialButton>
      <SocialButton
        colors={{
          baseColour,
          hoverColor,
        }}
        label={'LinkedIn'}
        href={'#'}
      >
        <FaLinkedinIn />
      </SocialButton>
      <SocialButton
        colors={{
          baseColour,
          hoverColor,
        }}
        label={'YouTube'}
        href={'#'}
      >
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
      rounded={'4'}
      w={6}
      h={6}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      borderWidth={1}
      borderColor={'gray.100'}
      color={colors?.baseColour || 'brand.gray'}
      _hover={{
        color: `${colors?.hoverColor || 'brand.purple.100'}`,
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

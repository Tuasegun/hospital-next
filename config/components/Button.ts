import { ComponentStyleConfig } from '@chakra-ui/theme'

export const Button: ComponentStyleConfig = {
  baseStyle: {
    bg: '#9b4de3',
    fontWeight: '700',
    fontSize: ['0.853rem', '0.853rem', 'xl'],
    borderRadius: '10px',
    color: 'brand.white',
    px: ['1.5rem', '1.5rem', '2.25rem'],
    py: '0.875rem',
    _hover: {
      bg: 'brand.yellow.700',
      color: 'brand.purple.500',
      borderTopRightRadius: '10px',
      borderBottomLeftRadius: '10px',
    },
  },
  sizes: {
    sm: {
      fontSize: 'md',
      height: '34px',
    },
    lg: {
      fontSize: '2xl',
      height: '73px',
    },
  },
  variants: {
    'link': {
      padding: 0,
      color: 'brand.purple.200',
      fontWeight: '700',
      fontSize: '1.125rem',
      backgroundColor: 'transparent',
      _hover: {
        textDecoration: 'none',
        border: 'none',
        backgroundColor: 'transparent',
        color: 'brand.yellow.700',
      },
    },
    'solid': {
      bg: 'brand.purple.100',
      fontSize: '12px',
      fontWeight: '400',
      color: 'white',
      _hover: {
        bg: 'transparent',
        color: 'brand.purple.100',
        border: '1px solid',
        borderColor: 'brand.purple.100',
        cursor: 'pointer',
      },
    },
    'solid-white': {
      bg: 'brand.white',
      color: 'brand.purple.200',
      fontWeight: '700',
      transition: 'all 0.35s ease-in-out',
      _hover: {
        bg: 'brand.yellow.700',
        color: 'brand.purple.500',
        borderTopRightRadius: '10px',
        borderBottomLeftRadius: '10px',
        borderTopLeftRadius: '0',
        borderBottomRightRadius: '0',
      },
    },
    'rounded-solid': {
      bg: 'brand.white',
      fontWeight: '700',
      fontSize: ['0.853rem', '0.853rem', 'xl'],
      borderRadius: '30px',
      color: 'brand.purple.500',
      px: '2.25rem',
      py: '0.875rem',
      transition: 'all 0.35s ease-in-out',
      _hover: {
        borderRadius: '30px',
        bg: 'brand.yellow.700',
      },
    },
    'outline': {
      bg: 'transparent',
      color: 'brand.purple.100',
      borderColor: 'brand.purple.100',
      border: '1px solid',
      fontSize: '12px',
      fontWeight: '400',

      _hover: {
        bg: 'brand.purple.100',
        color: 'brand.white',
      },
    },
    'rounded-solid-yellow-with-outline': {
      bg: 'brand.yellow.700',
      fontWeight: '700',
      fontSize: ['0.853rem', '0.853rem', 'xl'],
      borderRadius: '30px',
      color: 'brand.purple.500',
      px: '6.875rem',
      py: '1.75rem',
      transition: 'all 0.35s ease-in-out',
      position: 'relative',
      _hover: {
        borderRadius: '30px',
      },
      _before: {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'calc(100% + 10px)',
        height: 'calc(100% + 10px)',
        borderRadius: '30px',
        borderWidth: '1px',
        borderColor: '#F3F3F3',
      },
    },
    'subtle': (props) => {
      return {
        backgroundColor: `${props.colorScheme}.50`,
        color: `${props.colorScheme}.700`,
      }
    },
  },
}

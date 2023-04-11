import { MainContainer } from '@/layouts'
import { SocialIcons } from '@/components'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box as="nav">
      <MainContainer>
        <Flex
          flexDirection={['column-reverse', 'column-reverse', 'row']}
          py={4}
          justifyContent={'space-between'}
          alignItems={['center']}
          rowGap={4}
        >
          <Flex w={'50%'}>
            <Image
              w={'213px'}
              src="https://www.evercare.ng/wp-content/themes/evercare/images/logo.svg"
            />
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={['space-between', 'space-between', 'flex-end']}
            direction={'row'}
            spacing={2}
            w={['100%', '100%', '50%']}
          >
            <Button as={'a'} variant={'outline'} href={'#'}>
              Covid-19 Testing
            </Button>
            <Button as={'a'} variant={'solid'}>
              Patient Portal
            </Button>
          </Stack>
        </Flex>
      </MainContainer>
      <Box as="hr" />
      <MainContainer>
        <Box>
          <Flex
            bg={useColorModeValue('white', 'gray.800')}
            color={useColorModeValue('gray.600', 'white')}
            minH={'60px'}
            align={'center'}
            justifyContent={'space-between'}
          >
            <Flex
              flex={{ base: 1, md: 'auto' }}
              ml={{ base: -2 }}
              display={{ base: 'flex', md: 'none' }}
            >
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
              />
            </Flex>
            <Flex display={{ base: 'none', md: 'flex' }}>
              <DesktopNav />
            </Flex>
            <SocialIcons />
          </Flex>

          <Collapse in={isOpen} animateOpacity>
            <MobileNav />
          </Collapse>
        </Box>
      </MainContainer>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('brand.gray', 'gray.200')
  const linkHoverColor = useColorModeValue('brand.purple.300', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={[0, 4, 4, 8]}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                py={4}
                pos="relative"
                href={navItem.href ?? '#'}
                fontSize={'mmd'}
                fontWeight={500}
                color={linkColor}
                role="group"
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
                <Box
                  aria-hidden
                  h="4px"
                  bg={
                    navItem.label === 'Home'
                      ? 'brand.purple.300'
                      : 'transparent'
                  }
                  pos={'absolute'}
                  w={'100%'}
                  bottom="0"
                  borderRadius={'8px 8px 0 0'}
                  _groupHover={{
                    background: 'brand.purple.300',
                  }}
                />
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                px={4}
                py={1}
                rounded={'xl'}
                w={'auto'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('gray.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Text
          transition={'all .3s ease'}
          _groupHover={{ color: 'brand.purple.100' }}
          fontWeight={500}
        >
          {label}
        </Text>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'brand.purple.300'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'About Us',
    children: [
      {
        label: 'Who we are',
        href: '#',
      },
      {
        label: 'Board',
        href: '#',
      },
      {
        label: 'Management',
        href: '#',
      },
    ],
  },
  {
    label: 'Services',
    children: [
      {
        label: 'Doctors',
        href: '#',
      },
      {
        label: 'Nursing',
        href: '#',
      },
      {
        label: 'Speciality',
        href: '#',
      },
      {
        label: 'Quality & Safety',
        href: '#',
      },
      {
        label: 'Health and wellness packages',
        href: '#',
      },
    ],
  },
  {
    label: 'Customer Support',
    children: [
      {
        label: 'Feedback Form',
        href: '#',
      },
      {
        label: 'Patient Experience',
        href: '#',
      },
      {
        label: 'Whistle Blowing',
        href: '#',
      },
    ],
  },
  {
    label: 'Careers',
  },
  {
    label: 'Contact Us',
  },
  {
    label: 'Ecare Health Packages',
  },
]

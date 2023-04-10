import { Box, Image, List, ListItem, Stack, Text, Flex } from '@chakra-ui/react'

const YEAR = new Date().getFullYear()

export const Footer = () => {
  return (
    <Box as="footer" pt="5rem" pb="2.5rem">
      <Flex
        rowGap="3rem"
        flexDirection={['column', 'column', 'row']}
        justifyContent="space-between"
      >
        <Stack>
          <Image src="	https://www.evercare.ng/wp-content/themes/evercare/images/logo.svg" />
          <Text>
            1, Admiralty Way/Bisola Durosinmi‑Etti Drive,
            <br />
            Lekki Peninsula Scheme 1, Lekki, Lagos State
            <br />
            <br />
            <Text as="a" href="tel:08139850710" fontFamily="bold">
              0813 985 0710
            </Text>
          </Text>
        </Stack>
        <Stack
          w="60%"
          rowGap="1.5625rem"
          direction={['column', 'column', 'row']}
          justifyContent="space-between"
        >
          {FOOTER_ITEM.map((item) => (
            <Box key={item.heading}>
              <Text
                display="block"
                as="span"
                color="brand.darkBlue"
                fontSize="mmd"
                fontFamily="bold"
                mb="8px"
              >
                {item.heading}
              </Text>
              <List>
                {item.items.map((a) => (
                  <ListItem key={a.text} mb="8px">
                    <Text
                      as="a"
                      href={a.link}
                      color="brand.gray"
                      _hover={{ color: 'brand.darkBlue' }}
                    >
                      {a.text}
                    </Text>
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Stack>
      </Flex>
      <Stack borderTop="1px solid #F1F2F4" pt="2.5rem">
        <Text textAlign="center">
          Copyright © {YEAR} Evercare Hospital Lekki. All Rights Reserved.
        </Text>
        <Flex gap="1rem" justifyContent="center">
          <Text
            as="a"
            href="#"
            color="brand.gray"
            textDecor="underline"
            _hover={{ color: 'brand.darkBlue' }}
          >
            Terms of Use
          </Text>
          <Text
            as="a"
            href="#"
            color="brand.gray"
            textDecor="underline"
            _hover={{ color: 'brand.darkBlue' }}
          >
            Privacy Policy
          </Text>
        </Flex>
      </Stack>
    </Box>
  )
}

interface FooterItem {
  heading: string
  items: Array<{
    text: string
    link: string
  }>
}

const FOOTER_ITEM: Array<FooterItem> = [
  {
    heading: 'About Us',
    items: [
      {
        text: 'About Evercare',
        link: '#',
      },
      {
        text: 'News & Media',
        link: '#',
      },
      {
        text: 'Contact Us',
        link: '#',
      },
    ],
  },
  {
    heading: 'Quick Links',
    items: [
      {
        text: 'Ecare',
        link: '#',
      },
      {
        text: 'Patient Portal',
        link: '#',
      },
      {
        text: 'COVID Booking',
        link: '#',
      },
      {
        text: 'Online Payment',
        link: '#',
      },
      {
        text: 'Book an appointment',
        link: '#',
      },
    ],
  },
  {
    heading: 'Careers',
    items: [
      {
        text: 'Find a Job',
        link: '#',
      },
      {
        text: 'Working at Evercare',
        link: '#',
      },
    ],
  },
]

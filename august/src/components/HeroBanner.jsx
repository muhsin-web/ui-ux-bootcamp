'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react'
import heroIllus from '../assests/7450160-removebg-preview 1.svg'

export default function HeroBanner() {
  return (
    <Stack minH={'95vh'} maxW={'1170px'} margin={'0 auto'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'}>
        <Box spacing={6} w={'full'} maxW={'full'}>
          <Heading mb={'20px'} fontSize={{ base: '3xl', md: '64px'}}>
            <Text textAlign={'left'}>
              Break into tech, become a UI/UX designer.
            </Text>
          </Heading>

          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button width={'210px'} height={'70px'} fontSize={'16px'} bg={'#A18CC6'} color={'#fff'} rounded={'full'}>How It Works</Button>
          </Stack>
        </Box>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'contain'}
          src={heroIllus} />
      </Flex>
    </Stack>
  )
}

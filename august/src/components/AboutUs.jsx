'use client'

import {
  Box,
  Stack,
  HStack,
  Heading,
  Flex,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Image
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'
import icon01 from '../assests/teach_icon_136126 1(1).svg'
import icon02 from '../assests/people_community_filled_icon_200428 1.svg'
import icon03 from '../assests/smiley_happy_fun_emotavatar_icon_133473 1.svg'
import banner from '../assests/8867385-removebg-preview 1.svg'
function PriceWrapper(props) {
  const { children, color } = props
  console.log(color)

  return (
    <Box
      mb={4}
      width={'33.3%'}
      height={'400px'}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      padding={'25px'}
      borderColor={color}
      borderRadius={'40px'}>
      {children}
    </Box>
  )
}

export default function AboutUs() {
  return (
    <Box maxW={'1170px'} margin={'0 auto'} py={12}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="left"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>

        <PriceWrapper color={'#FD9BFF'}>
          <Box py={4} px={12}>

               <Image  src={icon01}/>
              <Text my={'20px'} fontSize="33px" fontWeight="400">
                  Hands on training
              </Text>
        
            <HStack justifyContent="center">
               <Text fontWeight="400" fontSize="16px" color={'#6B6B6B'}>
                  Get hands on training and coaching that will help you begin your design journey.
               </Text>
            </HStack>
          </Box>
        </PriceWrapper>

        <PriceWrapper color={'#CD4E5E'}>
          <Box py={4} px={12}>

               <Image  src={icon02}/>
              <Text my={'20px'} fontSize="33px" fontWeight="400">
                  Community
              </Text>
        
            <HStack justifyContent="center">
               <Text fontWeight="400" fontSize="16px" color={'#6B6B6B'}>
               Join a vibrant community of beginners, grow your network and expand your opportunities.
               </Text>
            </HStack>
          </Box>
        </PriceWrapper>

        <PriceWrapper color={'#9FD5EC'}>
          <Box py={4} px={12}>

               <Image  src={icon03}/>
              <Text my={'20px'} fontSize="33px" fontWeight="400">
                  Have Fun
              </Text>
        
            <HStack justifyContent="center">
               <Text fontWeight="400" fontSize="16px" color={'#6B6B6B'}>
               Learning doesn't have to be so stressful, you can have fun while learning how to design.
               </Text>
            </HStack>
          </Box>
        </PriceWrapper>
      </Stack>

      <Flex bg={'#9FCBA0'} rounded={'40px'} align={'center'} justify mt={'75px'} padding={'40px 0'}>
         <Image src={banner}/>
         <Text width={'md'} fontWeight={'700'} fontSize={'24px'} textAlign={'left'}>Want to join my fun design class? then get started with me.</Text>
      </Flex>
    </Box>
  )
}

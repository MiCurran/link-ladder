import {Heading, Text, Link, Avatar, Button, VStack, Center, Box, Image } from '@chakra-ui/react'
import styles from './Home.module.scss'
import { motion } from 'framer-motion'
import { animationVariants } from '../../constants/Animations/simpleVariants';
import {FaGithub, FaPencilAlt, FaTwitter, FaUser} from 'react-icons/fa'
const MotionHeading = motion(Heading);
const MotionLink = motion(Link);
import Hero from '../../components/Hero/Hero';
import Nav from '../../components/Nav/Nav';
import Features from '../../components/Features/Features';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Center>
      <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '20%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.600',
                  zIndex: -1,
                }}>
                Why Choose Link Ladder?
              </Text>
              <br />
            </Heading>
      </Center>
      <Features/>
      <BlobDivider />
      <Center bgGradient={'linear(to-tr, blue.800, blue.600)'} flexDir={'column'}>
      <Image 
        src={'/linkPage.png'}
        height={'auto'}
        width={'auto'}
      />
      </Center>
      <Footer />
    </div>
  )
}

export const BlobDivider = () => {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style={{stopColor:'rgba(26,71,138,255)', stopOpacity: "1"}} />
      <stop offset="100%" style={{stopColor:'rgba(29,96,209,255)', stopOpacity: "1"}} />
    </linearGradient>
  </defs>
        <path fill="url(#grad1)" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
  )
};
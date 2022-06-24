import {Heading, Text, Link, Avatar, Button, VStack } from '@chakra-ui/react'
import styles from '../../styles/Home.module.scss'
import { motion } from 'framer-motion'
import { animationVariants } from '../../constants/Animations/simpleVariants';
import {FaGithub, FaPencilAlt, FaTwitter, FaUser} from 'react-icons/fa'
const MotionHeading = motion(Heading);
const MotionLink = motion(Link);
import Hero from '../../components/Hero/Hero';
import Nav from '../../components/Nav/Nav';

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <footer className={styles.footer}>
        <VStack>
          <MotionLink 
            href="/"
          >
            Link Ladder
          </MotionLink>
          <MotionLink
            href="https://www.micurran.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created By:{' '} MiCurran
          </MotionLink>
        </VStack>
      </footer>
    </div>
  )
}

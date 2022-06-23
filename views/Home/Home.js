import {Heading, Text, Link, Avatar, Button, VStack } from '@chakra-ui/react'
import styles from '../../styles/Home.module.scss'
import { motion } from 'framer-motion'
import { animationVariants } from '../../constants/Animations/simpleVariants';
import {FaGithub, FaPencilAlt, FaTwitter, FaUser} from 'react-icons/fa'
const MotionHeading = motion(Heading);
const MotionLink = motion(Link);

const links = [
  {
    linkName: 'Twitter',
    icon: <FaTwitter />,
    href: 'https://twitter.com/micurran_dev'
  },
  {
    linkName: 'GitHub',
    icon: <FaGithub />,
    href: 'https://github.com/micurran_dev'
  },
  {
    linkName: 'Personal Site',
    icon: <FaUser />,
    href: 'https://www.micurran.dev'
  },
  {
    linkName: 'Blog',
    icon: <FaPencilAlt />,
    href: 'https://www.micurran.hashnode.dev'
  },
]

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <Heading> My Links</Heading>
        <Avatar size={'xl'} src={'https://avatars.githubusercontent.com/u/65498724?v=4'} name={'Michael Curran'}/>
        {links.map((link, i) => (
          <Link
            key={`${link.linkName}${i}`} 
            rel="noopener noreferrer"
            target={'_blank'} 
            href={link.href}
            my={'2'}
            >
              <Button 
                width={'250px'}
                leftIcon={link.icon}
              > {link.linkName} </Button>
          </Link>
        ))}
      </main>

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

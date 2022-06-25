import {Heading, Text, Link, Avatar, Button, VStack } from '@chakra-ui/react'
import styles from './UserView.module.scss'
import { motion } from 'framer-motion'
import {FaGithub, FaPencilAlt, FaTwitter, FaUser} from 'react-icons/fa'
import Footer from '../../components/Footer/Footer'

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

export default function UserView({user}) {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Heading> {user}'s Links</Heading>
                <Avatar size={'xl'} src={'https://avatars.githubusercontent.com/u/65498724?v=4'} name={user}/>
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
            <Footer />
        </div>
    )
}

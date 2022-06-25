import { Link, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)
export default function Footer ({}) {
    return (
        <footer>
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
    )
}
import {
    Box,
    Heading
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import Stepper from '../../components/Stepper/Stepper';

export const PANELS = [
    {
        panelName: 'User Settings',
        icon: <FaPhone />,
    },
    {
        panelName: 'Links',
        icon: null,
    },
    {
        panelName: 'Custom CSS',
        icon: null,
    },
]

export default function SettingsView ({}) {
    const [currentPanel, setCurrentPanel] = useState(1);
    const {panelName, icon} = PANELS[currentPanel];

    return (
        <Box
            w={'100vw'}
            p={10}
            bgColor={"gray.300"}
        >
            <Stepper 
                steps={PANELS}
                setCurrentStep={setCurrentPanel}
            />
            <Heading as={'h1'}>
                {icon && icon}
                {panelName}
            </Heading>
        </Box>
    )
}
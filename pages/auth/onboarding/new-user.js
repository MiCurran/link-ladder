import { getSession } from 'next-auth/react';
import { supabase } from '../../../lib/supabase';
import { useColorModeValue, Heading, Input, Text, Center, Box, Avatar,Button } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import Stepper from '../../../components/Stepper/Stepper';
import StepOne from '../../../views/Onboarding/Steps/StepOne';
import StepTwo from '../../../views/Onboarding/Steps/StepTwo';
import StepThree from '../../../views/Onboarding/Steps/StepThree';
import StepFour from '../../../views/Onboarding/Steps/StepFour';

const NewUser = ({newUser}) => {
    const { data: session } = useSession()
    const [userName, setUserName] = useState('');
    const [currentStep, setCurrentStep] = useState(0);
    
    const steps = [
        {
            label: 'User Name',
            component: <StepOne userName={userName} setUserName={setUserName} setCurrentStep={setCurrentStep}/>
        },
        {
            label: 'User Name',
            component: <StepTwo setCurrentStep={setCurrentStep} />,
        },
        {
            label: 'User Name',
            component: <StepThree setCurrentStep={setCurrentStep} />,
        },
        {
            label: 'User Name',
            component: <StepFour setCurrentStep={setCurrentStep} />,
        },
    ]
    

    return (
        <Center 
            flexDir={'column'} 
            minH='100vh' 
            py={20} 
            justifyContent={'space-between'}
        >
            <Stepper steps={steps} setCurrentStep={setCurrentStep} />
            {steps[currentStep].component}            
        </Center>
);
}

export default NewUser

export async function getServerSideProps(context) {
    const session = await getSession(context);
    let newUser = null;
    if (!session) {
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
    else {
        // look for user in db 
        let { data: linkladderbeta, error } = await supabase
        .from('linkladderbeta')
        .select("*")
        .eq('connected_email', session.user.email)

        if (!error && linkladderbeta.length === 0) {
            newUser = true;
        }
        else if (!error && linkladderbeta.length > 0) {
            // user found in db and they have registered so head to settings
            return {
                redirect: {
                    permanent: false,
                    destination: `/me/${linkladderbeta.username}/settings`
                }
            }
        } else {
            //error in the db call
            console.error(error);
        }
        return {
            props: {
                newUser,
                session
            },
        }
    }
}
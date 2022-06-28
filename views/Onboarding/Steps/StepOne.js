import { useColorModeValue, Heading, Input, Text, Center, Box, Avatar,Button } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useState, useRef, useEffect } from 'react';
export default function StepOne({userName, setUserName, setCurrentStep}) {
    const { data: session } = useSession();
    const inputReference = useRef(null);

    useEffect(() => {
      inputReference.current.focus();
    }, []);

    return (
        <>
            <Heading>Let's Pick A User Name!</Heading>
            <Avatar
                size={'xl'}
                src={session?.user?.image}
            />
            <Input
                ref={inputReference}
                textAlign={'center'}
                bgColor={useColorModeValue('gray.300','white')}
                maxWidth={'500px'}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                size={'lg'} 
                placeholder='user name'
            />
                <Button
                    onClick={() => setCurrentStep((currentStep)=> currentStep + 1)}
                    bgColor={'brand.500'}
                    color={'white'}
                    _hover={{
                        bgColor: 'brand.700',
                        transform: 'scale(.95)'
                    }}
                    disabled={!userName.length > 0}
                    style={{opacity: !!userName.length ? 'initial' : '0'}}
                >
                    Next Step
                </Button>
            <Center 
                flexDirection={'column'}
            >
            <Text textAlign={'center'}>
                Link Ladder User Names Are Important! <br/>
                <Text as='span' fontWeight={'bold'}>Your Micro landing page will 
                live at linkladder.me/YOUR-USERNAME-WILL-BE-HERE
                </Text>
            </Text>
            <Text>So make it a good one!</Text>
            </Center>
        </>
    );
};
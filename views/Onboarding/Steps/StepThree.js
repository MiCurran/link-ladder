import { useColorModeValue, Heading, Input, Text, Center, Box, Avatar,Button, SimpleGrid } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useState, useRef, useEffect } from 'react';

export default function StepThree({ setCurrentStep}) {
    const { data: session } = useSession();
    const inputReference = useRef(null);

    useEffect(() => {
      inputReference.current.focus();
    }, []);

    return (
        <>
            <Heading>Let's Customize!</Heading>
                <SimpleGrid columns={{base: 1, md: 2}} gap={10}>
                    <Box ref={inputReference} bgColor={'red'} h={'md'} w={'md'}/>
                    <Box ref={inputReference} bgColor={'red'} h={'md'} w={'md'}/>
                    <Box ref={inputReference} bgColor={'red'} h={'md'} w={'md'}/>
                    <Box ref={inputReference} bgColor={'red'} h={'md'} w={'md'}/>

                </SimpleGrid>
                <Button
                    onClick={() => setCurrentStep((currentStep)=> currentStep + 1)}
                    bgColor={'brand.500'}
                    color={'white'}
                    _hover={{
                        bgColor: 'brand.700',
                        transform: 'scale(.95)'
                    }}
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
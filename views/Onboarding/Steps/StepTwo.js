import { useColorModeValue, Heading, Input, Text, Center, Box, Avatar,Button,Stack, FormControl, FormLabel, InputGroup, InputLeftAddon,
    
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useState, useRef, useEffect } from 'react';

export default function StepTwo({setCurrentStep}) {
    const { data: session } = useSession();
    const inputReference = useRef(null);

    useEffect(() => {
      inputReference.current.focus();
    }, []);

    return (
        <>
            <Heading>Let's Add Some Links!</Heading>
            <Box>
            <FormControl>
                <FormLabel htmlFor='Twitter'>Twitter</FormLabel>
                    <InputGroup 
                        width={'500px'}
                    >
                        <InputLeftAddon children={'https://twitter.com/'}/>
                        <Input
                            id='Twitter'
                            ref={inputReference}
                            textAlign={'center'}
                            bgColor={useColorModeValue('gray.300','white')}
                            value={''}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder='user name'
                        />
                    </InputGroup>
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='Twitter'>Instagram</FormLabel>
                    <InputGroup 
                            width={'500px'}
                    >
                        <InputLeftAddon children={'https://instagram.com/'}/>
                        <Input
                            id='Twitter'
                            textAlign={'center'}
                            bgColor={useColorModeValue('gray.300','white')}
                            value={''}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder='user name'
                        />
                    </InputGroup>
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='LinkedIn'>LinkedIn</FormLabel>
                <InputGroup 
                            width={'500px'}
                    >
                        <InputLeftAddon children={'https://linkedin.com/in/'}/>
                <Input
                    id='LinkedIn'
                    textAlign={'center'}
                    bgColor={useColorModeValue('gray.300','white')}
                    width={'500px'}
                    value={''}
                    onChange={(e) => setUserName(e.target.value)}
                    size={'lg'} 
                    placeholder='user name'
                />
                </InputGroup>
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='Twitter'>YouTube</FormLabel>
                <InputGroup
                    width={'500px'}
                >
                    <InputLeftAddon children={'https://youtube.com/'}/>
                    <Input
                    id='Twitter'
                    textAlign={'center'}
                    bgColor={useColorModeValue('gray.300','white')}
                    value={''}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder='user name'
                />
                </InputGroup>
                
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='Twitter'>GitHub</FormLabel>
                <InputGroup
                    width={'500px'}
                >
                    <InputLeftAddon children={'https://github.com/'}/>
                    <Input
                    id='Twitter'
                    textAlign={'center'}
                    bgColor={useColorModeValue('gray.300','white')}
                    width={'500px'}
                    value={''}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder='user name'
                />
                </InputGroup>
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='Twitter'>Blog</FormLabel>
                <InputGroup
                    width={'500px'}
                >
                    <InputLeftAddon children={'https://'}/>
                    <Input
                    id='Twitter'
                    textAlign={'center'}
                    bgColor={useColorModeValue('gray.300','white')}
                    width={'500px'}
                    value={''}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder='user name'
                />
                </InputGroup>
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='Twitter'>Website</FormLabel>
                <InputGroup
                    width={'500px'}
                >
                    <InputLeftAddon children={'https://github.com/'}/>
                    <Input
                    id='Twitter'
                    textAlign={'center'}
                    bgColor={useColorModeValue('gray.300','white')}
                    width={'500px'}
                    value={''}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder='user name'
                />
                </InputGroup>
            </FormControl>
            </Box>
            <Center
                flexDirection={{base: 'column', md: 'row'}}
            >
                <Button
                    mx={2}
                    w={'250px'}
                    onClick={() => setCurrentStep((currentStep)=> currentStep + 1)}
                    variant={'ghost'}
                    color={'brand.500'}
                    _hover={{
                        bgColor: 'gray.300',
                        transform: 'scale(.95)'
                    }}
                >
                    Back
                </Button>
                <Button
                    mx={2}
                    w={'250px'}
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
            </Center>
            <Center 
                flexDirection={'column'}
            >
            <Text textAlign={'center'}>
                <Text>Let's get the most common links first!</Text>
                <Text as='span' fontWeight={'bold'}>
                    Don't Worry We Can Add More Later
                </Text>
            </Text>
            </Center>
        </>
    );
};
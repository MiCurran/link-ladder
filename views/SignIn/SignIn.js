import {
    Button,
    Checkbox,
    Flex,
    Heading,
    Stack,
    Image,
} from '@chakra-ui/react';
import { signIn, signOut, useSession } from "next-auth/react"


export default function SignInView({providers, newUser}) {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>{newUser ? 'Create an Account' : 'Sign in to Link Ladder'}</Heading>
          {providers &&
              Object.values(providers).map(provider => (
                <div key={provider.name} style={{ marginBottom: 0 }}>
                  <Button onClick={() => signIn(provider.id)} colorScheme={provider.id !== 'google' ? provider.id : 'gray'} w={'full'} leftIcon={provider.icon || null}>
                    {newUser === true ? 'Continue' : 'Sign in'} with{' '} {provider.name}
                  </Button>
                </div>
              ))}
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1504270997636-07ddfbd48945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'
        }
        />
      </Flex>
    </Stack>
    )
};
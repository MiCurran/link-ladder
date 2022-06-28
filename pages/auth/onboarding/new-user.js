import { getSession } from 'next-auth/react';
import UserView from '../../../views/User/UserView';
import { supabase } from '../../../lib/supabase';
import { Heading, Input, Text, Center, Box, Avatar,Button } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
const NewUser = ({newUser}) => {
    const { data: session } = useSession()
    const [userName, setUserName] = useState('');

    return (
        <Center flexDir={'column'} h='100vh' py={20} justifyContent={'space-between'}>
            <Heading>Let's Pick A User Name!</Heading>
            <Avatar
                size={'xl'}
                src={session?.user?.image}
            />
            <Input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                size={'lg'} 
                placeholder='user name'
            />
                <Button
                    disabled={!userName.length > 0}
                    style={{opacity: !!userName.length ? 'initial' : '0'}}
                >
                    Next Step
                </Button>
            <Box>
            <Text>
                Link Ladder User Names Are Important! Your Micro landing page will 
                live at linkladder.me/YOUR-USERNAME-WILL-BE-HERE
            </Text>
            <Text>So make it a good one!</Text>
            </Box>
        </Center>
);
}

export default NewUser

export async function getServerSideProps(context) {
    const session = await getSession(context);
    let newUser = null;
    console.log("🚀 ~ file: new-user.js ~ line 17 ~ getServerSideProps ~ session", session)
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
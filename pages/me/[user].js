import {
    Box, 
    Text
} from '@chakra-ui/react';

export default function User({user}) {
    return (
        <Box>
            <Text>user profile page</Text>
            <Text>
                {JSON.stringify(user, null, 2)}
            </Text>
        </Box>
    );
}

export async function getServerSideProps(context) {
    let {user} = context.params
    return {
      props: {
        user
      }, // will be passed to the page component as props
    }
}
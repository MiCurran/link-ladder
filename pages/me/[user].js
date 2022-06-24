import {
    Box, 
    Text
} from '@chakra-ui/react';
import UserView from '../../views/User/UserView';

export default function User({user}) {
    return (
        <UserView user={user}/>
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
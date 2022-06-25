import {
    Box, 
    Text
} from '@chakra-ui/react';
import UserView from '../../../views/User/UserView';
import { NextSeo } from 'next-seo';
import { CustomHead } from '../../../components/CustomHead';

export default function User({user}) {
    return (
        <>
            <CustomHead
                title={`User Name ${user}`}
                user={user}
                description="Fully customizable SEO descriptions images and links"
            />
            <UserView user={user}/>
        </>
    );
}

export async function getServerSideProps(context) {
    let {user} = context.params

    // eventually we will redirect if no user is found
    return {
        props: {
            user
        },
    }
}
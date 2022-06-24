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
                description="Fully customizable SEO descriptions images and links"
            />
            <UserView user={user}/>
        </>
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
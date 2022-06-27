import { getSession } from 'next-auth/react';
import UserView from '../../views/User/UserView';

const NewUser = ({session}) => {

return (
        <>
            <UserView session={session}/>
        </>
);
}

export default NewUser

export async function getServerSideProps(context) {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
    else {
        return {
            props: {
                session
            },
        }
    }
}
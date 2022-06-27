import { getCsrfToken, getProviders } from 'next-auth/react'
import {FcGoogle} from 'react-icons/fc';
import {FaFacebook, FaTwitter} from 'react-icons/fa';
import SignInView from '../../views/SignIn/SignIn';

const Signin = ({providers}) => {
  let provArr = [];
  Object.values(providers).forEach(provider => {
    let temp = provider;
    if ( provider.id === 'google') {
      temp.icon = <FcGoogle />
    }
    if ( provider.id === 'facebook') {
      temp.icon = <FaFacebook />
    }
    if ( provider.id === 'twitter') {
      temp.icon = <FaTwitter />
      temp.name = 'Twitter'
    }
    provider = temp;
    provArr.push(provider);
  });
  return (
    <SignInView providers={provArr}/>
  );
}

export default Signin

export async function getServerSideProps(context) {
  const providers = await getProviders()
  const csrfToken = await getCsrfToken(context)
  console.log(providers);
  return {
    props: {
      providers,
    },
  }
}
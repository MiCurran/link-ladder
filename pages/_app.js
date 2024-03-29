import '../styles/globals.scss'
import { ChakraProvider} from "@chakra-ui/react"
import { theme } from '../constants/theme';
import { SessionProvider } from "next-auth/react"

function App({ Component, pageProps: { session, ...pageProps }, }) {

  return (
      <ChakraProvider theme={theme}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ChakraProvider>
  )
}

export default App

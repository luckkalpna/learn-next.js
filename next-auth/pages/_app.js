import Navbar from '../components/Navbar';
import { SessionProvider } from "next-auth/react"
import '@/styles/globals.css';
import   '../components/Navbar.css'


export default function App({ Component, pageProps, session }) {
  return(
    <>
    <Navbar/>
    <SessionProvider session={session}></SessionProvider>
    <Component {...pageProps} />
    <SessionProvider/>
    </>
  )
}

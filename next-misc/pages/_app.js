import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'
import '../styles/layout.css'

export default function App({ Component, pageProps }) {
  return(
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

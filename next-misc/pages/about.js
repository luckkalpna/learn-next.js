import Head from 'next/head'
import Footer from "../components/footer"

function About() {
  return (
    <div className="container">
      <header>
        <title>About Codeevolution</title>
        <meta name='description' content='learn next.js coding' />
      </header>
      <h1>About</h1>
    </div>
  )
}

export default About

About.getLayout = function PageLayout(page){
  return(
    <>
      {page}
      <Footer/>
    </>
  )
}

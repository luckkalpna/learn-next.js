import Footer from '@/components/footer';

function About() {
  return (
    <div className="container">
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

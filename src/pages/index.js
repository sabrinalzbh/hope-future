import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import BackgroundImage from 'gatsby-background-image'
import { myName, quote, intro,sec1, sec3, } from '../module.css/index.module.css'






const IndexPage = () => {
  return (
   <Layout pageTitle="Home Page">
     <h1 className= {myName}> Sabrina Chacon</h1>
     <div className= {quote}>" What if I fail? Oh but darling, what if you fly? " </div> 

     <section className= {sec1}>
     <p className={intro}>Hello there. 
       My name is Sabrina. I am a Full-Stack Developer from Cleveland, Ohio. I've been a developer for over 2 years, but have just decided to 
       finally begin my journey as a freelancer and building my own business. Nothing makes me happier then the idea of working alongside of people who
       have a vision and desire to bring it to life. 
       Websites are not just a pretty screen full of information to read and pictures to look at. I believe it is also a representation of you and 
       what you are trying to build for your future. It would be such an honor to partner with you on your journey.
     </p>
     </section>


     <section className={sec3}>
       <Link to="/about">
         <button type="b">
          A littler more personal...
         </button>
       </Link>

     </section>
    
  
  
   <StaticImage
   //alt="Vintage flwr/vine, hanging about"
   //src="../images/vint-flwr.png"
   /> 
  </Layout>

  )
}


export default IndexPage

import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
   <Layout pageTitle="Home Page">
   <p>Welcome to my home page, a new way.</p>
   <StaticImage
   //alt="Vintage flwr/vine, hanging about"
  // src="../images/sincerely-media-BSp_5MPqBYs-unsplash.jpeg"
   /> 
  </Layout>

  )
}


export default IndexPage

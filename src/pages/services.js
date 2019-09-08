import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/reuseable/HeroSection'
import Infoblock from '../components/reuseable/Infoblock'
import Dualinfoblock from '../components/reuseable/Dualinfoblock'
import Teamphotosection from '../components/About/Teamphotosection'



const ServicePage = ({data}) => (
  <Layout>
    <SEO title="service" />
   <HeroSection 
     img={data.img.childImageSharp.fluid}
   title=" I write Code"
   subtitle="LearnCodeOnline.in"
   heroclass="about-background"
   />
      <Dualinfoblock heading="A message from Our" />
      <Infoblock heading="About Vision" />
      <Teamphotosection />
  </Layout>
)
export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
     childImageSharp {
       fluid(maxWidth: 400, maxHeight: 250) {
        ...GatsbyImageSharpFluid_tracedSVG
       }
     }
   }
}
`
export default ServicePage

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./bootstrap.min.css"
import "./layout.css"
import Footer from "./reuseable/Footer"
import Navbar from "./reuseable/Navbar"
import HeroSection from "./reuseable/HeroSection"
import Infoblock from "./reuseable/Infoblock"



const Layout=({children}) =>(
  <>
  <Navbar />
  {children}
  <Footer />
  </>
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

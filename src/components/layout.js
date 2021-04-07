/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from 'styled-components'
import "./layout.css";
import Navbar from './common/navbar'
import Footer from './common/Footer'

const Layout = ({ children }) => {


  return (
    <React.Fragment>
      <GlobalStyle/>
      <Navbar/>
      {children}
      <Footer/>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-size: 1.3rem;
  font-family: Poppins, sans-serif;
}
`

export default Layout

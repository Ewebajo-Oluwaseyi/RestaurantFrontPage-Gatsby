import * as React from "react"
import { Link } from "gatsby"
import { HomeHeader, Banner, BannerButton } from '../utils'
import img from '../images/restaurant.jpg'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from '../components/HomepageComponents/Info'
import Image from '../components/HomepageComponents/Image'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={img}>
      <Banner title="restaurant" subtitle="come and eat to your satisfaction">
        <BannerButton style={{margin: '2rem auto'}}>Menu</BannerButton>
      </Banner>
    </HomeHeader>
    <Info/>
    <Image/>
  </Layout>
)

export default IndexPage

import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import {Section, styles} from '../../utils'
import Img from 'gatsby-image'
import styled from 'styled-components'

const IMAGES = graphql`
    {
        img1: file(relativePath: {eq: "gallery/img4.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        img2: file(relativePath: {eq: "gallery/img5.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        img3: file(relativePath: {eq: "gallery/img3.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`

export default function Image() {
    return (
        <StaticQuery
         query={IMAGES}
         render={data => {
             console.log(data)
             const img1 = data.img1.childImageSharp.fluid
             const img2 = data.img2.childImageSharp.fluid
             const img3 = data.img3.childImageSharp.fluid
             return (
                 <Section>
                     <ImageWrapper>
                         <div className="item item-1">
                             <Img fluid={img1} />
                             <p className="info">Jollof Rice</p>
                         </div>
                         <div className="item item-2">
                             <Img fluid={img2} />
                             <p className="info">Burger</p>
                         </div>
                         <div className="item item-3">
                             <Img fluid={img3} />
                             <p className="info">Garlic Shrimp Spaghetti</p>
                         </div>
                     </ImageWrapper>
                 </Section>
             )
         }}
        />


    )
}


const ImageWrapper = styled.div`
    display: grid;;
    grid-template-columns: auto;
    row-gap: 1rem;
    .item {
        position: relative;
    }
    .info {
        position: absolute;
        top: 0;
        left: 0;
        background:${styles.colors.mainOrange};
        padding: 0.1rem 0.3rem;
        text-transform: capitalize;
    }

    @media only screen and (min-width: 576px){
        grid-template-columns: 1fr 1fr;
        column-grid: 1rem;
    }
    @media only screen and (min-width: 768px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (min-width: 992px){
        .gatsby-image-wrapper {
            height: 100%;
        }
        grid-template-areas:
        "item-one item-one item-two item two"
        "item-one item-one item-three item three";

        .item-1 {
            grid-area: item-one;
        }
        .item-2 {
            grid-area: item-two;
        }
        .item-3 {
            grid-area: item-three;
        }
    }

`
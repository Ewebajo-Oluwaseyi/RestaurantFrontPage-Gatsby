import { Link } from 'gatsby'
import React, { Component } from 'react'
import styled from 'styled-components'
import {Section, Title, SectionButton, styles} from '../../utils'

export default class Info extends Component {
    render() {
        return (
            <Section>
                 <Title message="Info about Us" title="Our Goal"/>
                <InfoWrapper>
                <p className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                    commodi fuga numquam nostrum eum minus nemo quod, praesentium odit
                    voluptates incidunt
                </p>
                <Link to="!#" style={{textDecoration: 'none'}}>
                    <SectionButton style={{margin: '2em auto'}}>More</SectionButton>
                </Link>
                </InfoWrapper>
            </Section>
        )
    }
}

const InfoWrapper = styled.div`
    width: 90%;
    margin: 2rem auto;
    .text {
        line-height: 2rem;
        color: ${styles.colors.mainBlack};
        word-spacing: 0.2em;
    }

    @media only screen and (min-width: 768px){
        width: 70%;
    }

    @media only screen and (min-width: 992px){
        width: 60%;
    }
`

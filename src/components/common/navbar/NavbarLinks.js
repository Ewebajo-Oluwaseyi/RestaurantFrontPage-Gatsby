import { Link } from 'gatsby'
import React, { Component } from 'react'
import styled from 'styled-components'
import {styles} from '../../../utils'

export default class NavbarLinks extends Component {
    state = {
        links: [
            {
                id: 0,
                name: "home",
                path: "/"
            },
            {
                id: 1,
                name: "about",
                path: "/about"
            },
            {
                id: 2,
                name: "menu",
                path: "/menu"
            },
            {
                id: 3,
                name: "contact",
                path: "/contact"
            },
        ]
    }
    render() {
        const { links } = this.state
        return (
            <div>
                <LinkWrapper open={this.props.navbarOpen}>
                    {links.map(link => (
                        <li key={link.id}>
                            <Link to={link.path} className="nav-link">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </LinkWrapper>
            </div>
        )
    }
}


const LinkWrapper = styled.ul`
 li {
     list-style-type: none
 }

 .nav-link {
     display: block;
     text-decoration: none;
     padding: 0.5em 1em;
     color: ${styles.colors.mainWhite};
     font-weight: 700;
     text-transform: capitalize;
     cursor: pointer;
     ${styles.transDefault};
     &:hover {
         color: ${styles.colors.mainOrange};
         padding: 0.5em 1rem 0.5em 1.3em;
     }

    }

    height: ${props => (props.open ? "250px": "0px")};
    overflow: hidden;
    ${styles.transObject({ time: "1s" })};
    @media (min-width: 768px) {
        height: auto;
        display: flex;
        margin: 0 auto;
        .nav-link:hover {
          padding: 0.5em 1em;
         }
    }
`
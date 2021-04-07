import React, { Component } from 'react'
import styled from 'styled-components'
import NavbarHeader from './NavbarHeader'
import NavbarLinks from './NavbarLinks'
import { styles } from '../../../utils'

export default class Navbar extends Component {
    state= {
        navbarOpen: false
    }
    handleNavbar = () => {
        this.setState({navbarOpen: !this.state.navbarOpen})
    }
    render() {
        return (
            <NavWrapper>
                <NavbarHeader handleNavbar= {this.handleNavbar}/>
                <NavbarLinks navbarOpen= {this.state.navbarOpen}/>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: ${styles.colors.mainBlack};
    @media only screen and (min-width: 768px){
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`
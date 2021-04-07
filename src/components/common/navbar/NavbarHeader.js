import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import { FaAlignRight } from 'react-icons/fa'
import { styles } from '../../../utils'
import logo from '../../../images/logo.jpg'

export default class NavbarHeader extends Component {
    render() {
        const { handleNavbar } = this.props
        return (
            <HeaderWrapper>
                <Link to="/" className="img">
                    <img src={logo} alt=""/> {" "}
                </Link>
                <FaAlignRight
                    className="toggle-icon"
                    onClick={() => {
                        handleNavbar()
                    }}
                />
            </HeaderWrapper>
        )
    }
}

const HeaderWrapper = styled.div`
    .img {
        height: 60px;
    }
    img {
        width: 80px;
        height: 55px;
    }
    padding-left: 1rem;
    margin-top: 0.4rem;
    margin-botton: 0.1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .toggle-icon {
        font-size: 1.75rem;
        color: ${styles.colors.mainYellow};
        cursor: pointer;
    }

    @media (min-width: 768px) {
        .toggle-icon {
            display: none;
        }
    }
`
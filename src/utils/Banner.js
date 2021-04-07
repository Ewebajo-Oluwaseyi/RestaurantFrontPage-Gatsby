import React from 'react';
import styled from 'styled-components'
import {styles} from '../utils'

export default function Banner({title, subtitle, children}) {
    return (
        <BannerWrapper>
            <h1 className="title">{title}</h1>
            <h3 className="subtitle">{subtitle}</h3>
            {children}
        </BannerWrapper>
    )
}

const BannerWrapper = styled.div`
    margin-buttom: 3rem;
    text-align: center;
    .title {
        color: ${styles.colors.mainOrange};
        font-size: 3rem;
        text-transform: uppercase;
        ${styles.letterSpacing({spacing: "0.4rem"})};
    }
    .subtitle {
        color: ${styles.colors.mainWhite};
        ${styles.textBody};
        ${styles.letterSpacing({spacing: "0.1rem"})};
        font-siz: 1.5rem;
        text-transform: capitalize;
        font-weight: 400;
    }

`

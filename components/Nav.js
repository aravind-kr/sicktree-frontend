import Link from 'next/link';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import Router from 'next/router';
import { FaRegUser } from 'react-icons/fa';
import { func } from 'prop-types';
import User from './User';
import Signout from './Signout';

const NavDiv = styled.div`
    width: 100%;
    text-align: center;
    position: relative;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.bs};
    z-index: 100;
    @media (max-width: 768x) {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.5rem;
        height: auto !important;
    }
    @media (min-width: 769px) {
        height: 50px;
    }
`;

const Logo = styled.p`
    position: absolute;
    font-size: 25px;
    left: 50%;
    height: auto;
    margin: 0 auto;
    transform: translate(-50%);
    a {
        color: ${props => props.theme.textDark};
        font-family: garamond-bold;
    }
    @media (max-width: 768px) {
        position: relative;
    }
`;

const NavBar = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: inherit;
    @media (max-width: 768px) {
        position: relative;
    }
`;

const NavBarInner = styled.div`
    position: relative;
    height: inherit;
`;

const _a = styled.a`
    color: ${props => props.theme.textMedium};
    line-height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    font-family: garamond-light;
    cursor: pointer;
`;

const SignUpBtn = styled.button`
    color: ${props => props.theme.textMedium};
    padding: 10px;
    margin-right: 20px;
    text-align: center;
    font-family: garamond-light;
    border: 1px solid ${props => props.theme.textMedium};
    border-radius: 5px;
    transition: background-color 0.5s ease;
    transition: color 0.5s ease;
    :hover {
        background: ${props => props.theme.textMedium};
        color: ${props => props.theme.white};
    }
`;

const Span = styled.span`
    color: ${props => props.theme.textMedium};
    line-height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    font-size: 1.6rem;
    font-family: garamond-light;
`;

const Nav = props => (
    <User>
        {({ data: { me } }) => (
            <NavDiv>
                <Logo>
                    <Link href="/">
                        <_a>SickTree</_a>
                    </Link>
                </Logo>
                <NavBar>
                    <NavBarInner>
                        <Link href="/">
                            <_a>Pricing</_a>
                        </Link>
                        <Link href="/">
                            <_a>Help</_a>
                        </Link>
                        {!me && (
                            <>
                                <_a href={process.env.INSTAGRAM_AUTH_URI}>
                                    <FaRegUser style={{ marginTop: '2px' }} />{' '}
                                    Login
                                </_a>
                                <a href={process.env.INSTAGRAM_AUTH_URI}>
                                    <SignUpBtn>SIGN UP FREE</SignUpBtn>
                                </a>
                            </>
                        )}

                        {me && (
                            <>
                                <Span>{me.username}</Span>
                                <Signout />
                            </>
                        )}
                        {/* <Link href="/something"> */}
                    </NavBarInner>
                </NavBar>
            </NavDiv>
        )}
    </User>
);

export default Nav;

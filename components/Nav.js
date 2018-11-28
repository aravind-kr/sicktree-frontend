import Link from 'next/link';
import styled from 'styled-components';
import { FaRegUser } from 'react-icons/fa';

const NavDiv = styled.div`
    width: 100%;
    text-align: center;
    position: relative;
    height: 50px;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.bs};
    z-index: 100;
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
`;

const NavBar = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: inherit;
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
`;

const SignUpBtn = styled.a`
    color: ${props => props.theme.textMedium};
    line-height: 50px;
    padding: 10px;
    margin-right: 20px;
    text-align: center;
    font-family: garamond-light;
    border: 1px solid palevioletred;
    border-radius: 5px;
    transition: background-color 0.5s ease;
    transition: color 0.5s ease;
    :hover {
        background: palevioletred;
        color: ${props => props.theme.white};
    }
`;

const Nav = props => (
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
                <Link href="/">
                    <_a>
                        <FaRegUser /> Login
                    </_a>
                </Link>
                <Link href="/">
                    <SignUpBtn>SIGN UP FREE</SignUpBtn>
                </Link>
            </NavBarInner>
        </NavBar>
    </NavDiv>
);

export default Nav;

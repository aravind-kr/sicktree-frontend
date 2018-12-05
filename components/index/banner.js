import styled from 'styled-components';
import React, { Component } from 'react';

const OuterDiv = styled.div`
    height: 600px;
    background-image: url('/static/banner.png');
    background-size: cover;
    background-position: center;
    width: 100%;
    min-height: 400px;
`;

const InnerDiv = styled.div`
    top: 35%;
    width: 100%;
    position: absolute;
    text-align: center;
    h2 {
        font-size: 5.2vh;
        color: ${props => props.theme.white};
        max-width: 65vh;
        margin: 0 auto;
        margin-bottom: 4.5vh;
        padding: 0 20px;
        font-family: Karla, Helvetica, sans-serif;
        font-weight: 400;
        line-height: 125%;
    }
    a {
        color: ${props => props.theme.textMedium};
        background-color: ${props => props.theme.white};
        border-radius: 4px;
        padding: 20px;
        transition: background-color 0.5s ease;
        :hover {
            background: ${props => props.theme.textMedium};
            color: ${props => props.theme.white};
        }
    }
`;

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = { height: '600px' };
    }

    componentDidMount() {
        this.setState({ height: window.innerHeight - 50 + 'px' });
    }

    render() {
        return (
            <OuterDiv style={{ height: this.state.height }}>
                <InnerDiv>
                    <h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h2>
                    <a> SIGN UP WITH INSTAGRAM</a>
                </InnerDiv>
            </OuterDiv>
        );
    }
}

export default Banner;

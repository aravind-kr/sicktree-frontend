import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Meta from '../components/Meta';
// import theme from '../components/theme';

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: '#333';
  }
  button {  font-family: 'radnika_next'; }
`;

class Page extends Component {
    render() {
        return (
            // <ThemeProvider theme={theme}>
                <div>
                    <Meta />
                    {this.props.children}
                </div>
            // </ThemeProvider>
        );
    }
}

export default Page;

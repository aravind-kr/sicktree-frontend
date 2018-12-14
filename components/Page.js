import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Meta from './Meta';
import Nav from './Nav';
import globalTheme from './theme';

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'garamond-light';
    src: url('/static/GARA.TTF');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'garamond-bold';
    src: url('/static/GARABD.TTF');
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
    color: '#fff';
  }
  button {  font-family: 'radnika_next'; }
`;

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={globalTheme}>
                <div>
                    <Meta />
                    <Nav />
                    {this.props.children}
                </div>
            </ThemeProvider>
        );
    }
}

export default Page;

import App, { Container } from 'next/app';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../src/getPageContext';
import Page from '../components/Page';

class _app extends App {
    constructor(props) {
        super(props);
        this.pageContext = getPageContext();
    }

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        // this exposes the query to the user
        pageProps.query = ctx.query;
        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props
        
        return (
            <Container>
                <JssProvider
                    registry={this.pageContext.sheetsRegistry}
                    generateClassName={this.pageContext.generateClassName}
                >
                    <MuiThemeProvider
                        theme={this.pageContext.theme}
                        sheetsManager={this.pageContext.sheetsManager}
                    >
                        <Page>
                            <Component {...pageProps} />
                        </Page>
                    </MuiThemeProvider>
                </JssProvider>
            </Container>
        );
    }
}

export default _app;

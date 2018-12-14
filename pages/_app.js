import App, { Container } from 'next/app';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';
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
        if (Object.keys(ctx.query).length) {
            pageProps.query = ctx.query;
        }

        return { pageProps };
    }

    render() {
        const { Component, apollo, pageProps } = this.props;

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
                        <ApolloProvider client={apollo}>
                            <CssBaseline />
                            <Page>
                                <Component {...pageProps} />
                            </Page>
                        </ApolloProvider>
                    </MuiThemeProvider>
                </JssProvider>
            </Container>
        );
    }
}

export default withData(_app);

import styled from 'styled-components';

const OuterDiv = styled.div`
    display: block;
    div {
        position: relative;
        margin: 0 auto;
        max-width: 1080px;
        h3 {
            font-size: 40px;
            font-weight: 400;
            margin: 40px auto;
            max-width: 960px;
            text-align: center;
            font-family: Karla, Helvetica, sans-serif;
        }
    }
`;

const TextInner = styled.div`
    position: absolute;
    top: 50%;
    padding-bottom: 4%;
    width: 500px;
    font-family: Karla, Helvetica, sans-serif;
    h4 {
        text-align: left;
        font-size: 30px;
        font-weight: 400;
        line-height: 200%;
        margin: 1.5rem auto 1rem;
    }
    p {
        font-size: 16px;
        font-weight: 400;
        line-height: 2.5rem;
        margin: 1.2rem 0;
        text-align: left;
    }
    a {
        position: absolute;
        margin: 35px auto 0;
        text-align: center;
        font-family: Karla,Helvetica,sans-serif;
        font-size: 16px;
        font-weight: 400;
        border: 1px solid ${props => props.theme.white};
        border-radius: 2px;
        padding: 15px 35px;
        color: ${props => props.theme.white};
        background: ${props => props.theme.cherryRedHighlight};
    }
`;

const HIW = props => (
    <OuterDiv>
        <div>
            <h3>Never change your bio link again.</h3>
        </div>
        <div  style={{ margin: '0 auto 210px' }}>
            <TextInner>
                <h4>How it works</h4>
                <p>
                    Linktree is a free tool for optimising your Instagram
                    traffic, whether you’re a blogger, an artist or run a
                    content platform.
                </p>
                <p>
                    You’ll get one bio link to house all the content you’re
                    driving followers to.
                </p>
                <p>Let your content live longer than the feed.</p>
                <a>SIGN UP FREE</a>
            </TextInner>
        </div>
    </OuterDiv>
);

export default HIW;

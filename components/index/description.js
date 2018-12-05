import styled from 'styled-components';

const OuterDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    text-align: center;
    max-width: 960px;
    margin: 0 auto 100px;
    div {
        /* flex: 1; */
        h4 {
            text-align: center;
            font-size: 30px;
            font-family: Karla,Helvetica,sans-serif;
            font-weight: 200;
            margin: 1.5rem auto 1rem;
        }
        p {
            font-family: Karla,Helvetica,sans-serif;
            font-weight: 200;
            font-size: 16px;
            line-height: 2.5rem;
            margin: 1.2rem 0;
        }
    }
`;

const BioLinkGraphic = styled.div`
    display: block;
    margin: 0 auto;
    text-align: center;
    background-image: url(/static/bio.svg);
    height: 82px;
    width: 69px;
`;

const DestGraphic = styled.div`
    display: block;
    margin: 0 auto;
    background-repeat: no-repeat;
    justify-content: center;
    background-image: url(/static/destination.svg);
    height: 82px;
    width: 69px;
`;

const ManagedGraphic = styled.div`
    display: block;
    margin: 0 auto;
    background-image: url(/static/work.svg);
    height: 82px;
    width: 69px;
`;

const Description = props => (
    <OuterDiv>
        <div>
            <BioLinkGraphic />
            <h4>One bio link</h4>
            <p>Help your followers discover all of your recent content</p>
        </div>
        <div>
            <DestGraphic />
            <h4>Multiple destinations</h4>
            <p>
                Send followers anywhere: articles, webstore, events, socials and
                more.
            </p>
        </div>
        <div>
            <ManagedGraphic />
            <h4>Easily managed</h4>
            <p>Paste in new URLs, then drag and drop the links to reorder.</p>
        </div>
    </OuterDiv>
);

export default Description;

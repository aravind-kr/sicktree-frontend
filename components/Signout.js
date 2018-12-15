// import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import { log } from 'util';

const SIGN_OUT_MUTATION = gql`
    mutation SIGN_OUT_MUTATION {
        signout {
            message
        }
    }
`;

const SignOutBtn = styled.button`
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

const Signout = props => (
    <Mutation
        mutation={SIGN_OUT_MUTATION}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
        {signout => <SignOutBtn onClick={signout}>Sign Out</SignOutBtn>}
    </Mutation>
);
export default Signout;

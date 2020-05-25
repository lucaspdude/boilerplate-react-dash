import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Main = styled.div`
    background-color: #E0E0E0;
    height: calc(100vh - 100px);
    overflow: scroll;
    flex-basis: 80%;
    padding: 35px;
`;

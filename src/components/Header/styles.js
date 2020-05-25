import styled from 'styled-components';

export const Container = styled.div`
    height: 64px;
    // background: #C94646;
    background: rgb(11,88,30);
    background: linear-gradient(137deg, rgba(11,88,30,1) 0%, rgba(109,129,210,1) 50%, rgba(89,63,63,1) 100%);

    padding: 0 30px;
    height: 100px;
    flex-basis: 100%;
    border-bottom: 10px solid #fff;


    h1{
      color: #fff;
      font-weight: 900;
      font-size: 28px;
    }
`;

export const Logo = styled.img`
    width: 100%;
    height: auto;
    max-width: 150px;
`;

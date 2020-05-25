import styled from 'styled-components';
import img1 from '../../assets/images/bg_signIn.png';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form{
        width: 70%;
        display: block;
        margin: 0 auto;
        button{
            margin: 0 auto 30px auto;
            display: block;
        }
    }
`;

export const Logo = styled.img`
    width: 100%;
    max-width: 250px;
    height: auto;
    max-height: 85px;
    margin-bottom: 50px;
`;

export const ImageBG = styled.div`
    background-image: url(${img1});
    background-size: cover;
    background-position: center;
    border-left: 10px solid #FFFFFF;
    @media(max-width: 992px){
        display: none;
    }
`;

export const Links = styled.div`
    display: block;
    margin: 0 auto;
    width: 70%;
    text-align: center;
    a{
        color: #FFFFFF;
        text-decoration: underline;
        display: block;
        margin-bottom: 10px;
        &:hover{
            color: #FFC536;
        }
    }
`;

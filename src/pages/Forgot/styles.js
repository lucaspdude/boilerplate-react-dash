import styled from 'styled-components';
import img1 from '../../assets/images/bg_signIn.png';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3{
      color: #ffffff;
      margin-bottom: 30px
      text-align: center;
    }
    form{
        width: 60%;
        display: block;
        margin: 0 auto;
        button{
            margin-bottom: 30px;
        }
    }
`;

export const Logo = styled.img`
    width: 100%;
    max-width: 250px;
    height: auto;
    max-height: 85px;
    margin-bottom: 50px;
    transform: rotate(-5deg)
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

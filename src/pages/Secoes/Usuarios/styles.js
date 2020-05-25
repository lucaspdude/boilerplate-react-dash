import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
display: flex;
flex-direction: column;
h3{
  color: #ffffff;
  margin-bottom: 30px
  text-align: center;
}
form{
    width: 60%;
    display: block;
    // margin: 0 auto;
    button{
        margin-bottom: 30px;
    }
    input{
      background: #C94646;
      border-radius: 5px;
      color: #fff;
    }
}
`;


export const ContainerSimples = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
overflowX: hidden;
h1{
  font-weight: 700;
  font-size: 28px;
  text-transform: uppercase;
  margin-bottom: 10px;
}
h3{
  font-weight: 700;
  margin: 10px 0px;
}
table{
  thead{
    tr{
      td{
        border-top: 0;
      }
    }
  }
}
.hidden{
  display: none;
}





}

`;

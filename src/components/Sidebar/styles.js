import styled from 'styled-components';

export const SidebarContent = styled.aside`
  background-color: #333333;

  color: #FFFFFF;
  height: calc(100vh - 100px);
  flex-basis: 20%;
  padding: 10px 20px;
  a{
    display: block;
    color: #FFFFFF;
    padding: 10px 0 10px 0;
    border-bottom: 1px solid #FFFFFF;
    &:hover{
      color: rgba(255,255,255,0.5);
      text-decoration: none;
    }
  }
`;

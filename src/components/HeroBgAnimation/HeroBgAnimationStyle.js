import styled from "styled-components";

export const Div = styled.div`
  position: absolute;

  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;

  pointer-events: none;

  svg{
      width:760px;
      height:760px;
  }

  @media(max-width:960px){

      svg{
          width:540px;
          height:540px;
      }

  }

  @media(max-width:768px){

      svg{
          width:420px;
          height:420px;
      }

  }
`;
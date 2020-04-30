import styled from 'styled-components';
// import { render } from '@testing-library/react';

export const Main = styled.div`
font-size: .5em;
margin: 3em;
`;

export const Input = styled.input`
  background-color: rgb(241, 236, 228);
  border: solid;
  border: 1.5px solid #A9BCF5;
  box sizing: medium;
  font-size: 1.2rem;
  &:focus {
    online: none;
  }
`;

export const Pstyle  = styled.p`
  font-size: 1.3rem;
`;

export const H1style = styled.h2`
    display: "flex",
    flexDirection: "row",
    flexGrow: "0",
    alignItems: "center",
    marginLeft: "3em",
    fontSize: "30px",
    fontFamily: "Comfortaa, cursive",
    color: "black",
    }
    `;
    
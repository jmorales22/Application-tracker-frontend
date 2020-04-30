import styled from 'styled-components';
// import { render } from '@testing-library/react';

export const Form = styled.div`
font-size: .5em;
margin: 3em;
`;

export const Input = styled.input`
  background-color: rgb(241, 236, 228);
  border: solid;
  border: 1.5px solid #A9BCF5;
  box sizing: large;
  font-size: 1.5rem;
  &:focus {
    online: none;
  }
`;

export const Question = styled.p`
  font-size: 1.3rem;
`;

export const H1style = styled.p`
    margin: "0",
    display: "flex",
    flexDirection: "row",
    flexGrow: "0",
    alignItems: "center",
    height: "50px",
    marginLeft: "30px",
    fontSize: "35px",
    fontFamily: "Comfortaa, cursive",
    color: "black",
    }
    `;
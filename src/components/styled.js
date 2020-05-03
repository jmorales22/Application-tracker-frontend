import styled from "styled-components";

export const Main = styled.div`
  font-size: 2em;
  margin: 1.3em;
  padding: 0px;
`;
export const Wrapper = styled.div`
  font-size: 1.5em;
  margin: 1.3em;
  padding: 0px;
`;
export const Button = styled.button`
  background: #00adb5;
  border-radius: 20px;
  color: white;
  height: 30px;
  width: 80px;
  font-size: 14px;
  font-family: Lato, sans-serif;
`;

export const Input = styled.input`
  background-color: rgb(241, 236, 228);
  border: solid;
  border: 1.5px solid #a9bcf5;
  box-sizing: medium;
  font-size: 1.3rem;
  /* &:focus {
    online: none;
  }  */
`;
export const InputBox = styled.input`
  background-color: rgb(241, 236, 228);
  border: solid;
  border: 1.5px solid #a9bcf5;
  height: 3rem;
  width: 3rem;
  font-size: 1.2rem;
  /* &:focus {
  online: none;
}  */
`;

export const Pstyle = styled.div`
  font-size: 1.3rem;
  padding: 0px;
`;
export const Label = styled.label`
  font-size: 1.3rem;
  padding: 10px;
`;

export const Hstyle = styled.h2`
  display: flex;
  flex-direction: row;
  flex-grow: "0";
  align-items: "center";
  margin: "3em";
  font-size: "30px";
  font-family: "Comfortaa, cursive";
  color: "black";
  margin: "3em";
`;

export const LogoImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 80px;
  @media only screen and (min-device-width: 1025px) {
    width: 45%;
    display: block;
    margin: 0 auto;
  }
`;

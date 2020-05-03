import styled from "styled-components";

export const Application = styled.div`
  width: 100%;
`;

export const Centered = styled.div`
  display: flex;
  align-items: center;
`;

export const Main = styled.div`
  font-size: 2em;
  margin: 1.3em;
  padding: 0px;
`;

export const OuterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 95%;
  margin: 2.5%;
  font-size: 1.5em;
  padding: 0px;
`;

export const Button = styled.button`
  background: #00adb5;
  border-radius: 20px;
  color: white;
  outline: none;
  height: 30px;
  width: 80px;
  font-size: 14px;
  font-family: Lato, sans-serif;
`;

export const IntButton = styled.button`
  background: #ffffff;
  border: 1px;
  color: #00adb5;
  border: 1px solid;
  border-radius: 5px;
  outline: none;
  margin-top: 3%;
  margin-bottom: 3%;
  height: 40px;
  width: 100%;
  max-width: 535px;
  font-size: 14px;
  font-family: Lato, sans-serif;
`;

export const LinkStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00adb5;
  border: 0px;
  border-radius: 5px;
  color: white;
  outline: none;
  height: 40px;
  width: 100%;
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

export const Pstyle = styled.p`
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

export const Logo = styled.div`
  margin-left: "auto";
  margin-right: "auto";
`;

export const AppIntWrapper = styled.div`
  padding: 2%;
  min-width: 342px;
  margin-bottom: 3%;
  color: #00adb5;
  border-radius: 5px;
  box-shadow: -0.1px 0.1px 3px;
`;

export const AppIntTitle = styled.div`
  margin-top: 1%;
  margin-bottom: 1%;
  font-weight: bold;
  text-align: center;
  color: black;
`;

export const MainList = styled.ul`
  padding: 1%;

`;

export const AppIntBox = styled.div`
  color: black;
`;

export const AppBox = styled.div`
`;

export const AppTitle = styled.div`
  margin-top: 1%;
  margin-bottom: 1%;
  font-weight: bold;
  text-align: center;
  color: black;
`;

export const IntBox = styled.div`
  height: auto;
`;

export const ListItem = styled.div`
  margin-top: 2%;
  margin-bottom: 3%;
`;

export const ListCategory = styled.div`
  font-size: 0.75em;
  font-weight: bold;
`;  

export const DividingLine = styled.span`
  display:block;
  border:none;
  color:white;
  margin-top: 20px;
  height:1px;
  background:black;
  background: -webkit-gradient(radial, 50% 50%, 0, 50% 50%, 350, from(#adadad), to(#fff));
`;
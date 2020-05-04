import styled from "styled-components";

export const Application = styled.div`
  width: 100%;
`;

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  font-size: 3em;
  margin: 1.3em;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Lato, sans-serif;
`;

export const InputDate = styled.input`
  background-color: rgb(241, 236, 228);
  border: solid;
  margin-top: 4px;
  border-radius: 10px;
  border: 1.5px solid #00adb5;
  box-sizing: medium;
  font-size: 20px;
  font-family: Lato, sans-serif;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

export const AboutH1 = styled.div`
  font-size: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 40px;
  color: black;
`;

export const GithubLinks = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 16px;
`;
export const SignUpH1 = styled.div`
  font-size: 25px;
  margin-top: 40px;
  padding: 0px;
  font-family: Lato, sans-serif;
  margin-left: 10px;
`;

export const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 768px;
`;

export const Wrapper = styled.div`
  width: 95%;
  margin: 2.5%;
  margin-top: 0%;
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
  margin-left: 43%;
  margin-top: 35px;
  padding: 0px;
  
`;

export const CreateButton = styled.button`
  background: #00adb5;
  border: 1px;
  color: white;
  border: 3px solid #00adb5;
  border-radius: 20px;
  outline: none;
  margin-top: 3%;
  padding: 0px 4px 0px;
  height: 30px;
  font-size: 14px;
  font-family: Lato, sans-serif;
`;

export const AppFormBox = styled.div`
  margin-top: 40px;
`;
export const SignUpForm = styled.div`
  margin-top: 100px;
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
  margin-top: 2%;
  margin-bottom: 4%;
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
margin-top: 4px;
border-radius: 10px;
border: 1.5px solid #00adb5;
box-sizing: medium;
font-size: 1.3rem;
font-family: Lato, sans-serif;
padding: 10px;
&:focus {
  outline: none;
}
`;

export const CommentInput = styled.textarea`
  background-color: rgb(241, 236, 228);
  border: solid;
  margin-top: 4px;
  border-radius: 10px;
  border: 1.5px solid #00adb5;
  box-sizing: medium;
  font-size: 1.3rem;
  font-family: Lato, sans-serif;
  padding: 10px;
  min-width: 30rem;
  min-height: 5rem;
  max-width: 30rem;
  max-height: 20rem;
  &:focus {
    outline: none;
  } 
`;

export const InputBox = styled.input`
  background-color: rgb(241, 236, 228);
  border: solid;
  border: 1.5px solid #a9bcf5;
  height: 3rem;
  width: 3rem;
  font-size: 1.2rem;
  &:focus {
  outline: none;
  } 
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

export const AppForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #00adb5;
  width: 50px;
  height: 30px;
  background: #ffffff;
  border: 3px solid;
  border-radius: 10px;
  outline: none;
  margin-top: 3%;
  margin-bottom: 3%;
  font-size: 14px;
  font-family: Comfortaa, cursive;
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1%;
  font-weight: bold;
  text-align: center;
  color: black;
`;

export const YourApps = styled.div`
  color: black;
`;

export const MainList = styled.ul`
  padding: 1%;
  margin-top: 0%;
`;

export const AppIntBox = styled.div`
  color: black;
`;

export const AppBox = styled.div``;

export const AppTitle = styled.div`
  margin-top: 1%;
  margin-bottom: 1%;
  padding-top: 1%;
  padding-bottom: 1%;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  background-color: #e6e8ed;
  color: #00adb5;
`;

export const IntBox = styled.div`
  height: auto;
`;

export const ListItem = styled.div`
  margin-top: 2%;
  margin-bottom: 3%;
`;

export const IntListItems = styled.div`
  margin-left: 5%;
  color: black;
`;

export const ListCategory = styled.div`
  font-size: 0.75em;
  font-weight: bold;
`;

export const Comments = styled.p`
  font-size: 0.75em;
  margin-top: 0%;
`;

export const DividingLine = styled.span`
  display: block;
  border: none;
  color: white;
  height: 2px;
  background: black;
  background: -webkit-gradient(radial, 50% 50%, 0, 50% 50%, 350, from(#adadad), to(#fff));
`;

export const CompaniesWrapper = styled.div`
  padding: 2%;
  min-width: 342px;
  margin-bottom: 3%;
  color: #00adb5;
  border-radius: 5px;
  box-shadow: -0.1px 0.1px 3px;
`;

export const CompanyList = styled.ul`
  display: flex;
  color: black;
`;

export const CompanyLink = styled.div`
  text-align: center;
  margin: 5%;
`;

export const OuterIntWrapper = styled.div`
  max-width: 768px;
`;

export const InterviewsBody = styled.div`
  color: black;
`;

export const IntTitle = styled.div`
  margin-top: 3%;
  margin-bottom: 3%;
  padding-top: 1%;
  padding-bottom: 1%;
  width: 95%;
  width: 360px;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  background-color: #e6e8ed;
  color: #00adb5;
`;

export const InterviewsList = styled.li`
  margin-bottom: 2%;
`;

export const DividingLineCompany = styled.span`
  display:block;
  border:none;
  color:white;
  width: 200px;
  height: 2px;
  background: black;
  background: -webkit-gradient(radial, 50% 50%, 0, 50% 50%, 350, from(#adadad), to(#fff));
`;

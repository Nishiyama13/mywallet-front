import styled from "styled-components";
import { mainColor, buttonColor, commentColor } from "../../constants/colors";

export const ContainerHome = styled.div`
  width: 100%;
  color: ${mainColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 25px;
  
`;

export const Header = styled.div`
  width: 100%;
  border-radius: 30px;
  position: fixed;
  top: 22px;
  h1{
    padding-bottom: 54px;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    position: fixed;  
    left: 24px;
    z-index: 1;
  }

  img{  
  width: 23px;
  position: fixed;
  top: 22px;
  right: 24px;
  z-index: 1;
  }
`;

export const ContainerWallet = styled.div`
  width: 90%;
  position: fixed;
  overflow: auto;
  top: 78px;
  bottom:143px ;
  z-index: 1;
  border-radius: 5px;

  background-color: ${mainColor};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 50px;

  h2{
    color: ${commentColor};
  }

`;

export const Footer = styled.div`
  width: 100%;
  color: ${mainColor};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 70px;
  position: fixed;
  bottom: 0px;
  z-index: 1;
  button {
    height: 114px;
    width: 155px;
    border-radius: 8px;
    border: none;
    color: ${mainColor};
    margin-bottom: 12px;
    padding-left: 10px;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const NewInputValouButton = styled.button`
  color: ${mainColor};
  background-color: ${buttonColor};
`;
export const NewOutputValouButton = styled.button`
  color: ${mainColor};
  background-color: ${buttonColor};
`;

export const Icon = styled.div`
font-size: 25px;

margin-bottom: 30px;
`

export const NoTransactions = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`



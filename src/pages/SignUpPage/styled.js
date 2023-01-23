import styled from "styled-components";
import { buttonColor, mainColor } from "../../constants/colors";

export const ContainerSignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 135px;
  form {
    margin-top: 100px;
  }
  a {
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;

    color: ${mainColor};
  }
`;

export const Button = styled.button`
  height: 45px;
  width: 100%;
  border-radius: 5px;
  border-style: none; 

  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 14px;
  margin-bottom: 24px;
  color: ${mainColor};
  background: ${buttonColor};
`;
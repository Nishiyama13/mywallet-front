import styled from "styled-components";
import { buttonColor, mainColor } from "../../constants/colors";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 135px;
  form {
    margin-top: 100px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    height: 45px;
    width: 100%;
    border-radius: 5px;
    border-style: none;

    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 14 24px;
    color: ${mainColor};
    background: ${buttonColor};
    margin-top: 14px;
    margin-bottom: 24px;
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


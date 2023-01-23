import styled from "styled-components";
import { buttonColor } from "../../constants/colors";

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
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 14 24px;
    color: #ffff;
    background: ${buttonColor};
    margin-top: 14px;
    margin-bottom: 24px;
  }
`;
import styled from "styled-components"
import { mainColor, buttonColor, txtColor } from "../../constants/colors"

export const ContainerNewValue = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 45px;


  h1 {
    color: ${mainColor};
    padding-bottom: 40px;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    padding-right:175px ;
  }
`

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
`
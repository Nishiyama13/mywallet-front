import styled from "styled-components";
import{ txtColor,negativeColor,positiveColor, mainColor } from "../constants/colors"

export default function BalanceDisplay(props){
    const {balanceValue} = props;
    const valueColor = balanceValue >0 ? positiveColor : negativeColor;

    return(
        <ContainerBalances >
            <Message>Saldo: </Message> <Value color={valueColor}>{balanceValue}</Value>
        </ContainerBalances>

    )

}

export const ContainerBalances = styled.div`
font-size: 17px;
height: 30px;
margin-bottom: -10px;
width: 84%;
padding-left: 15px;
display: flex;
justify-content: space-between;
position: fixed;
bottom: 153px;

background-color: ${mainColor};
border-radius: 5px;
`
const Message = styled.span`
font-weight: 700;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color: ${txtColor};
`

const Value = styled.span`
color: ${props => props.color}`
import styled from "styled-components";
import{ commentColor,txtColor,negativeColor,positiveColor } from "../constants/colors"

export default function WalletTransactions(props){
    const {key,type, value, description, data } = props;
    const valueColor = type === "input" ? positiveColor : negativeColor;

    return(
        <ContainerBalances key={key}>
            <Data>{data}</Data> <Description>{description}</Description> <Value color={valueColor}>{value}</Value>
        </ContainerBalances>

    )

}

const ContainerBalances = styled.div`
display: flex;
width: 100%;
flex-direction: row;
 padding-left: 12px;
 padding-right: 12px;
 padding-top:23px ;
`
const Data = styled.span`
color: ${commentColor};
margin-right: 5%;
`
const Description = styled.span`
color:${txtColor};
width: 50%;
margin-right: 5%;
`
const Value = styled.span`
color: ${props => props.color}`
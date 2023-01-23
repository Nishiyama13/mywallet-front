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
flex-direction: row;
 padding-left: 12px;
 padding-right: 12px;
`
const Data = styled.p`
color: ${commentColor};
`
const Description = styled.p`
color:${txtColor}
`
const Value = styled.p`
color: ${props => props.color}`
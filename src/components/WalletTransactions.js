import styled from "styled-components";

export default function WalletTransactions(props){
    const {type, value, description, data } = props;
    return(
        <div>
            <p>{data}</p> <p>{description}</p> <p>{value}</p>
        </div>

    )

}
import logoutIcon from "../../assets/logoutIcon.png";
import AuthContext from "../../context/AuthContext";
import { BASE_URL } from "../../constants/urls";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import ContainerLinks from "../../components/ContainerLinks";
import {
  ContainerHome,
  Header,
  ContainerWallet,
  Footer,
  NewOutputValouButton,
  NewInputValouButton,
  Icon
} from "./styled";
import axios from "axios";



export default function HomePage() {
    const navigate = useNavigate();
    const { token, setToken } = useContext(AuthContext);
    const url = `${BASE_URL}/home`;
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

    useEffect(() => {
        const tokenDes = JSON.parse(localStorage.getItem("token"));
        if (tokenDes) {
          setToken(tokenDes);
        }
      }, []);

    const promise = axios.get(url, config);
    promise.then(res => {
      console.log(res.data);
    });
    promise.catch(err => console.log(err.response.data));

    function newInputValou(){
        navigate("/nova-entrada");
    }

    function newOutputValou(){
        navigate("/nova-saida");
    }
    

    return(
        <ContainerHome>
        <Header>
            <h1>Olá, (colocar nome)</h1>
            <img src={logoutIcon} alt="icone de logout" />
        </Header>
        <ContainerWallet>
            <h1>Wallet box</h1>
        </ContainerWallet>
        <Footer>
          <NewInputValouButton onClick={newInputValou}> 
          <Icon>
                <ion-icon name="add-circle-outline"></ion-icon>
            </Icon>
            <div>
                <p>Nova</p> 
                <p>entrada</p>
            </div>
           
          </NewInputValouButton>
          <NewOutputValouButton onClick={newOutputValou}>
            <Icon>
                <ion-icon name="remove-circle-outline"></ion-icon>
            </Icon>
            <div>
                <p>Nova</p> 
                <p>entrada</p>
            </div>
            
          </NewOutputValouButton>
        </Footer>
      </ContainerHome>
    )
}
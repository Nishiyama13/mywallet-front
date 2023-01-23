import logoutIcon from "../../assets/logoutIcon.png";
import AuthContext from "../../context/AuthContext";
import { BASE_URL } from "../../constants/urls";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WalletTransactions from "../../components/WalletTransactions";
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
    const [walletBalanceList, setWalletBalanceList] = useState([]);
    const url = `${BASE_URL}/home`;
    const [userName, setUserName] = useState("");

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

        const promise = axios.get(url,config);
        promise.then(res =>{
            setUserName(res.data.name);
        })
        promise.catch(error => console.log(error.response.data));

        const promise2 = axios.get(url, config);
        promise2.then(res => {
        setWalletBalanceList = res.data;
        console.log(res.data);
        });
        promise2.catch(err => console.log(err.response.data));

      }, []);

    function newInputValou(){
        navigate("/nova-entrada");
    }

    function newOutputValou(){
        navigate("/nova-saida");
    }    

    function handleLogout(){
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }
    

    return(
        <ContainerHome>
        <Header>
            <h1>Olá, {userName}</h1>
            <img src={logoutIcon} alt="icone de logout" onClick={handleLogout}/>
        </Header>
        <ContainerWallet>
            {walletBalanceList.length === 0 ? (
                <div>
                    <h2>Não há registros de</h2>
                    <h2>entrada ou saída</h2>
                </div>
            ) : (
                walletBalanceList.map((b) => (
                    <WalletTransactions
                     key={b.id} type={b.type} value={b.value} description = {b.description} data={b.data}
                     />
                ))
            )}
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
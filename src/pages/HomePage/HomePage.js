import logoutIcon from "../../assets/logoutIcon.png";
import AuthContext from "../../context/AuthContext";
import UserContext from "../../context/UserContext";
import { BASE_URL } from "../../constants/urls";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WalletTransactions from "../../components/WalletTransactions";
import BalanceDisplay from "../../components/BalanceDisplay" ;
import {
  ContainerHome,
  Header,
  ContainerWallet,
  Footer,
  NewOutputValouButton,
  NewInputValouButton,
  Icon,
  NoTransactions,
} from "./styled";
import axios from "axios";

export default function HomePage() {
        const navigate = useNavigate();
        const { token, setToken } = useContext(AuthContext);
        const { user, setUser } = useContext(UserContext);
        const [walletBalanceList, setWalletBalanceList] = useState(undefined);
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


            const promise = axios.get(url, config);
            promise.then(res => {
            setWalletBalanceList(res.data);
            console.log(res.data);
     
            });

            promise.catch(err => console.log(err.response.data));

        }, []);

        useEffect(() => {
            const userDes = JSON.parse(localStorage.getItem("user"));
            if (userDes) {
                setUser(userDes);
            }
        },[])  

    
        if(walletBalanceList === undefined){
            return(
                <div><h1 color="blue">Carregando...</h1></div>
            )
        }
         
         
        let newBalance = walletBalanceList.reduce((acc, curr) => {
    
            if(curr.type === 'input'){
                return acc + parseFloat(curr.value);
            } else {
                return acc - parseFloat(curr.value);
            }
        },0);
        newBalance =(Math.round(newBalance * 100)/ 100).toFixed(2);

 
        
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

 
         const reverseWalletBalanceList = [...walletBalanceList].reverse();
        console.log(reverseWalletBalanceList);     
        
        return(
            <ContainerHome>
            <Header>
                <h1>Olá, {user}</h1>
                <img src={logoutIcon} alt="icone de logout" onClick={handleLogout}/>
            </Header>
            <ContainerWallet>
                {walletBalanceList.length === 0 ? (
                    <NoTransactions>
                        <h2>Não há registros de</h2>
                        <h2>entrada ou saída</h2>
                    </NoTransactions>
                ) : (
                    reverseWalletBalanceList.map((b) => (
                        <WalletTransactions
                        key={b._idUser} type={b.type} value={b.value} description = {b.description} data={b.data}
                        />
                    ))
                )}
            {walletBalanceList.length !== 0 ? (
            <BalanceDisplay balanceValue={newBalance} />
            ) : (
            <div>sem saldo</div>
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
                    <p>saída</p>
                </div>
                
            </NewOutputValouButton>
            </Footer>
        </ContainerHome>
        )
}



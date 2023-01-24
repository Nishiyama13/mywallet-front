import AuthContext from "../../context/AuthContext";
import UserContext from "../../context/UserContext";
import { BASE_URL } from "../../constants/urls";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FormContainer } from "../LoginPage/styled";
import { ContainerNewValue } from "./styled";

export default function InputValuePage() {
    const navigate = useNavigate();
    const { token, setToken } = useContext(AuthContext);
    const {setUser} = useContext(UserContext);
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const url = `${BASE_URL}/nova-entrada`;

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
    
      function newInputValue(e){
        e.preventDefault();
        let checkvalue = value;

        if( !value.includes(".") && !value.includes(",") ){
            checkvalue = checkvalue+".00";
        }
        const body = {value:checkvalue, description};
        
        const promise = axios.post(url, body, config);      
        promise.then(res => {
        //console.log(res); //resposta

          //alert ("Novo fluxo positivo cadastrado")
          navigate("/home");
          
        });
        promise.catch(err => alert(err.response.data.message));

    }

    useEffect(() => {
        const userDes = JSON.parse(localStorage.getItem("user"));
        if (userDes) {
            setUser(userDes);
        }
    },[])  

      
    return(
        <ContainerNewValue>
            <h1>Nova entrada</h1>
            <FormContainer>
                <form onSubmit={newInputValue}>
                    <input
                        type="number"
                        placeholder="Valor"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        pattern="\d+(\.|\,)\d{2}"
                        required
                    />
 
                    <input
                        type="text"
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    />

                    <button type="submit">Salvar entrada</button>
                </form>
            </FormContainer>
        </ContainerNewValue>
    )
}
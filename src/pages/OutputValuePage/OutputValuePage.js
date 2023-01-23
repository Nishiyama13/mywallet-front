import AuthContext from "../../context/AuthContext";
import { BASE_URL } from "../../constants/urls";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FormContainer } from "../LoginPage/styled";
import { ContainerNewValue } from "./styled";

export default function OutputValuePage() {
    const navigate = useNavigate();
    const { token, setToken } = useContext(AuthContext);
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        const tokenDes = JSON.parse(localStorage.getItem("token"));
        if (tokenDes) {
          setToken(tokenDes);
        }
      }, []);
    
      function newInputValue(e){
        e.preventDefault();
        const URL = `${BASE_URL}/nova-saida`;
        const body = {value, description};
        console.log(body); 
        
        const promise = axios.post(URL, body);      
        promise.then(res => {
          console.log(res); //resposta
          
          setToken(res.data.token);

          alert ("Novo fluxo positivo cadastrado")
          navigate("/home");
          
        });
        promise.catch(err => alert(err.response.data.message));

      }
      
    return(
        <ContainerNewValue>
            <h1>Nova saida</h1>
            <FormContainer>
                <form onSubmit={newInputValue}>
                    <input
                        type="number"
                        placeholder="Valor"
                        value={value}
                        onChange={e => setValue(e.target.value)}
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
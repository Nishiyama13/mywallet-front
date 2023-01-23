import AuthContext from "../../context/AuthContext";

import { Link, useNavigate } from "react-router-dom";
import { LoginContainer, FormContainer } from "./styled";
import { useContext, useState } from "react";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import logo from "../../assets/logo.png";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useContext(AuthContext);
 
  function login(e) {
    e.preventDefault();
    const url = `${BASE_URL}/`;
    const body = { email, password };
    console.log(body); //estrutura a enviar

    const promise = axios.post(url, body);
    promise.then(res => {
      console.log(res); //resposta
 
      setToken(res.data);
      alert("usuario conectado!");

      navigate("/home");
    });
    promise.catch(err => alert(err.response.data.message));
  }

  return (
    <LoginContainer>
      <img src={logo} />
      <FormContainer>
        <form onSubmit={login}>
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <input
            id="password"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button type="submit">Entrar</button>
        </form>
        <Link to="/cadastro">Primeira vez? Cadastre-se</Link>
      </FormContainer>
    </LoginContainer>
  );
}
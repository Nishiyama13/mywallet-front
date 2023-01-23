import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ContainerSignUp, Button } from "./styled";
import axios from "axios";
import logo from "../../assets/logo.png";
import BASE_URL from "../../constants/urls.js"

/*const exBody = {
    name: "Goku",
	email: "goku@email.com",
	password: "goku123",
    confirmPassword: "goku123"

}
*/
// BASE_URL = http://localhost:3000
//
export default function SingUpPage() {
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  function createAccount(e) {
    e.preventDefault();
    const URL =
      "http://localhost:5000/cadastro";
    const body = { name, email, password, confirmPassword };

    const promise = axios.post(URL, body);
    promise.then(res => {
      alert("Cadastro Realizado");
      navigate("/");
    });
    promise.catch(err => console.log(err.response.data));
  }
  return (
    <ContainerSignUp>
      <img src={logo} />

      <form onSubmit={createAccount}>
               <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
 
        <input
          type="password"
          placeholder="Confirme a senha"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
        />

        <Button type="submit">Cadastrar</Button>
      </form>
      <Link to="/">Já possui uma conta? Faça login</Link>
    </ContainerSignUp>
  );
}
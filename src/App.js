import AuthContext from "./context/AuthContext";
import UserContext from "./context/UserContext";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage/SignUpPage"
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import InputValuePage from "./pages/InputValuePage/InputValuePage";
import OutputValuePage from "./pages/OutputValuePage/OutputValuePage";

export default function App(){
    const [token, setToken] = useState("");
    const [user, setUser] = useState("");

    useEffect(() => {
        localStorage.setItem("token", JSON.stringify(token));
      }, [token]);

      useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
      }, [user]);

    
    return(
      <AuthContext.Provider value={{ token, setToken }}>
        <UserContext.Provider value={{ user, setUser }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} /> 
              <Route path="/cadastro" element={<SignUpPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/nova-entrada" element={<InputValuePage />} />
              <Route path="/nova-saida" element={<OutputValuePage />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
    </AuthContext.Provider>
    )
}
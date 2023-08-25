import React, { useContext } from 'react';
import LoginForm from "../components/Forms/LoginForm";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../components/AuthContext/AuthContextProvider';



const Login = () => {
    const navigate = new useNavigate();
    const { setIsLoggedIn } = useContext(AuthContext);
    const handleLogin = async (loginData) => {
        return fetch("http://localhost:8080/api/v1/auth/authenticate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData)
        })
            .then(res => res.json())
            .then(login => localStorage.setItem("jwt", login.token))
            .then(() => setIsLoggedIn(true))
            .then(() => navigate("/landing"));

    }

    return (
        <LoginForm onLogin={handleLogin} />
    )
};

export default Login;
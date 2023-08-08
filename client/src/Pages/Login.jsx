import React, { useContext } from 'react';
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../components/AuthContext/AuthContextProvider';



const Login = () => {
    const navigate = new useNavigate();
    const { setIsLoggedIn } = useContext(AuthContext);
    const handleLogin = (loginData) => {
        return fetch("http://localhost:8080/api/v1/auth/authenticate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData)
        })
            .then(res => res.json())
            .then(login => {
                localStorage.setItem("jwt", login.token);
            }).then(() => {
                setIsLoggedIn(true);
                navigate("/posts");
            })

    }


    return (
        <LoginForm
            onLogin={handleLogin}
            onCancel={() => navigate("/")}
        />
    )
};

export default Login;
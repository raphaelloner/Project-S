import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../components/AuthContext/AuthContextProvider';
import RegisterForm from '../components/Forms/RegisterForm';



const Register = () => {
    const navigate = new useNavigate();

    const handleRegister = (loginData) => {
        return fetch("http://localhost:8080/api/v1/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData)
        })
            .then(res => res.json())
            .then(() => navigate("/login"));

    }

    return (
        <RegisterForm
            onRegister={handleRegister}
            onCancel={() => navigate("/login")}
        />
    )
};

export default Register;
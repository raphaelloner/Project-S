import React from 'react';
import SimpleInput from './FormComponents/InputSimple';
import BasicForm from './BasicForm';
import SubmitButton from './FormComponents/ButtonSubmit';
import LinkStandart from './FormComponents/LinkStandart';



const LoginForm = ({ onLogin }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const entries = [...formData.entries()];


        const login = entries.reduce((acc, entry) => {
            const [key, value] = entry;
            acc[key] = value;
            console.log(acc);
            return acc;
        }, {})
        return onLogin(login);
    }

    const children = <>
        <SimpleInput type={"email"} name={"email"} label={"Your email"} placeholder={"name@mail.com"} />
        <SimpleInput type={"password"} name={"password"} label={"Your password"} placeholder={"*********"} />
        <div className="flex items-center justify-between">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                </div>
                <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                </div>
            </div>
            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
        </div>
        <SubmitButton label={"Log in"} />
        <LinkStandart text={" Don’t have an account yet?"} href={"register"} textAlign={"center"} />
    </>

    return (
        <>
            <BasicForm children={children} onLogin={onLogin} onSubmit={onSubmit} titel={"Login in to your Account"} />
        </>
    )
};

export default LoginForm;
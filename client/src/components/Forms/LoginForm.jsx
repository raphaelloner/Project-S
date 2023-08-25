import React from 'react';
import AuthInput from '../Input/AuthInput';
import BasicForm from './BasicForm';



const LoginForm = ({ onLogin }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const entries = [...formData.entries()];
        console.log(entries)

        const login = entries.reduce((acc, entry) => {
            const [key, value] = entry;
            acc[key] = value;
            console.log(acc)
            return acc;
        }, {})
        return onLogin(login);
    }

    const test = <>
        <AuthInput type={"email"} name={"email"} label={"Your email"} placeholder={"name@mail.com"} />
        <AuthInput type={"password"} name={"password"} label={"Your password"} placeholder={"*********"} />
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
        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet? <a href="register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
        </p></>

    return (
        <>
            <BasicForm children={test} onLogin={onLogin} onSubmit={onSubmit} />
        </>
    )
};

export default LoginForm;
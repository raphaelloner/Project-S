import React from 'react';
import BasicForm from './BasicForm';
import AuthInput from '../Input/AuthInput';



const RegisterForm = ({ onCancel, onRegister }) => {

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const entries = [...formData.entries()];
        console.log(entries)

        const register = entries.reduce((acc, entry) => {
            const [key, value] = entry;
            acc[key] = value;
            return acc;
        }, {})
        return onRegister(register);
    }
    const children = (
        <>
            <AuthInput type={"text"} name={"firstname"} label={"Firstname"} />
            <AuthInput type={"text"} name={"lastname"} label={"Lastname"} />
            <AuthInput type={"email"} name={"email"} label={"Email"} placeholder={"name@mail.com"} />
            <AuthInput type={"password"} name={"password"} label={"Password"} />

            <div className="emailflex items-start mb-6">
                <div className="flex items-center h-5">
                    <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>

        </>
    )
    return (
        <BasicForm children={children} onSubmit={onSubmit} />

    )
};

export default RegisterForm;
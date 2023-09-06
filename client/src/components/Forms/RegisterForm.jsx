import React from 'react';
import BasicForm from './BasicForm';
import SimpleInput from './FormComponents/InputSimple';
import SubmitButton from './FormComponents/ButtonSubmit';



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
            <SimpleInput type={"text"} name={"firstname"} label={"Firstname"} />
            <SimpleInput type={"text"} name={"lastname"} label={"Lastname"} />
            <SimpleInput type={"email"} name={"email"} label={"Email"} placeholder={"name@mail.com"} />
            <SimpleInput type={"password"} name={"password"} label={"Password"} />

            <div className="emailflex items-start mb-6">
                <div className="flex items-center h-5">
                    <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                </div>

            </div>
            <SubmitButton label={"Register new account"} />
        </>
    )
    return (
        <BasicForm children={children} onSubmit={onSubmit} titel={"Join our Community"} />

    )
};

export default RegisterForm;
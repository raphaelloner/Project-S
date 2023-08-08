import React from 'react';



const LoginForm = ({ onCancel, onLogin }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const entries = [...formData.entries()];
        //  console.log(entries)

        const login = entries.reduce((acc, entry) => {
            const [key, value] = entry;
            acc[key] = value;
            return acc;
        }, {})
        return onLogin(login);
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>email: </label>
                <input
                    name={"email"}
                    required={true}
                    placeholder={"email"}
                    type={"email"}
                />
            </div>

            <div>
                <label>password: </label>
                <input
                    name={"password"}
                    required={true}
                    placeholder={"password"}
                    type={"password"}
                />
            </div>

            <div className="buttons">
                <button type="submit" >
                    Login
                </button>

                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
            </div>

        </form>
    )
};

export default LoginForm;
import React from 'react';
import BasicForm from './BasicForm';
import SubmitButton from './FormComponents/ButtonSubmit';


const PostForm = ({ disabled, onCancel, onSave }) => {

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const entries = [...formData.entries()];
        console.log(entries)

        const post = entries.reduce((acc, entry) => {
            const [key, value] = entry;
            acc[key] = value;
            return acc;
        }, {})
        return onSave(post);
    }
    const children =
        <>

            <textarea id="content" name="content" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            <SubmitButton label={"Confirm"} />
        </>

    return (
        <>
            <BasicForm children={children} onSubmit={onSubmit} titel={"Your Message"} />
        </>
    )
}

export default PostForm;
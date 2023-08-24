import React from 'react';


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
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Content: </label>
                <input
                    name={"content"}
                    required={true}
                    placeholder={"Message"}
                    type={"text"}
                />
            </div>

            <div className="buttons">
                <button type="submit" disabled={disabled}>
                    {/*{post ? "Update Employee" : "Create Employee"}*/}
                    Create Post
                </button>

                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    )
}

export default PostForm;
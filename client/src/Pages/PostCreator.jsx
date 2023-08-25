import { useNavigate } from "react-router-dom";
import PostForm from "../components/Forms/PostForm";
import { useState } from "react";

const createPost = (post) => {
    return fetch("http://localhost:8080/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("jwt")}` },
        body: JSON.stringify(post),
    }).then((res) => res.json())
}

const PostCreator = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleCreatePost = (post) => {

        setLoading(true);

        createPost(post)

            .catch((err) => {
                console.log("catch error: " + err);
                throw err;
            })
            .finally(() => {
                setLoading(false);
                navigate("/posts");
            });
    }

    return (
        <PostForm disabled={loading} onCancel={() => navigate("/")} onSave={handleCreatePost}
        />
    )
}

export default PostCreator;
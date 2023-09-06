import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import AnswerForm from "../components/Forms/AnswerForm";




const AnswerCreator = ({ parentId }) => {
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
                navigate(`/answers/${parentId}`);
            });
    }
    const createPost = (post) => {

        return fetch(`http://localhost:8080/posts/answers/${parentId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("jwt")}` },
            body: JSON.stringify(post),
        }).then((res) => res.json())
    }
    return (
        <AnswerForm disabled={loading} onCancel={() => navigate("/")} onSave={handleCreatePost} />
    )
}

export default AnswerCreator;
import { useEffect, useState } from "react"
import OnePost from "../components/Posts/OnePost";
import { useParams } from "react-router-dom";
import PostList from "../components/Posts/PostList";
import Loading from "../components/Loading/Loading";

const fetchPosts = (signal, url) => {
    return fetch(url, {
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("jwt")}` }

    }).then(res => res.json());
}


const Answers = () => {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState(null);
    const [answers, setAnswers] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        fetchPosts(controller.signal, `http://localhost:8080/posts/answers/${params.id}`)
            .then((posts) => {
                console.log(posts)
                setLoading(false);
                setAnswers(posts);
            })
            .catch((error) => {
                if (error.name !== "AbortError") {
                    setAnswers(null);
                    throw error;
                }
            })

        return () => controller.abort();

    }, [loading])


    if (loading) {
        return <Loading />
    }


    return (
        <>
            <PostList posts={answers} />
        </>
    )

}
export default Answers;
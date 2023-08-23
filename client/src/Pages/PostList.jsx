import React, { useEffect, useState } from "react";
import Posts from "../components/Posts/Posts";
import Loading from "../components/Loading/Loading";



const fetchPosts = (signal) => {
    return fetch("http://localhost:8080/posts", {
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("jwt")}` }

    }).then(res => res.json());
}

const PostList = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);


    useEffect(() => {
        const controller = new AbortController();

        fetchPosts(controller.signal)
            .then((posts) => {
                setLoading(false);
                setData(posts);

            })
            .catch((error) => {
                if (error.name !== "AbortError") {
                    setData(null);
                    throw error;
                }
            })


        return () => controller.abort();
    }, [data])

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <Posts posts={data} />
        </>
    )
}

export default PostList;
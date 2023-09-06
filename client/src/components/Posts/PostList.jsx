import { Link } from "react-router-dom";
import OnePost from "./OnePost";

const PostList = ({ posts }) => {

    return (
        <div style={{ marginTop: "30px" }} className="max-w-screen-xl mx-auto p-16">
            {posts.map((post, index) => (
                <OnePost key={index} post={post} index={index} />
            ))
            }
        </div>
    )
}

export default PostList;
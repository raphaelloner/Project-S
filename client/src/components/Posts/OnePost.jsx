import { useEffect, useState } from "react";
import LinkStandart from "../Forms/FormComponents/LinkStandart";
import PostCreator from "../../Pages/PostCreator";
import AnswerCreator from "../../Pages/AnswerCreator";


const OnePost = ({ post, index }) => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const dateTime = post.postTime;

    const handleClick = () => {
        setIsFormVisible(isFormVisible ? false : true);
    }


    return (
        <>
            <div style={{ marginBottom: "15px" }} className="block rounded-lg bg-white p-6 shadow-[0_22px_35px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <span style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {post.username}
                    </h5>
                    <p style={{ textAlign: "right" }} >{dateTime.substring(0, 10) + " " + dateTime.substring(12, 19)}</p>
                </span>

                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {post.content}
                </p>
                <span style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                    <button
                        type="button"
                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Like
                    </button>
                    <button
                        onClick={handleClick}
                        type="button"
                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Answer
                    </button>

                    <LinkStandart href={`/answers/${post.id}`} text={`go to ${post.answers.length} answers`} textAlign={"center"} />

                </span>

            </div>
            {isFormVisible && <AnswerCreator parentId={post.id} />}
        </>
    )
}

export default OnePost;
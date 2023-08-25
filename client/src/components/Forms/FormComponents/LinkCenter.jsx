const LinkCenter = ({ text, href }) => {

    return (
        <div >
            <a style={{ textAlign: "center" }} href={href} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    {text}
                </p>
            </a>
        </div>
    )

}
export default LinkCenter;
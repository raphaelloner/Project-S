const LinkStandart = ({ text, href, textAlign }) => {

    return (
        <div >
            <a style={{ textAlign: textAlign }} href={href} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                <p className="text-base font-light text-gray-500 dark:text-gray-400">
                    {text}
                </p>
            </a>
        </div>
    )

}
export default LinkStandart;
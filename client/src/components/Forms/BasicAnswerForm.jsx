const BasicAnswerForm = ({ children, onSubmit, titel }) => {
    //<a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
    //<img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
    //Notice
    //</a>

    return (

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "16px" }} className="flex flex-col justify-around">

            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 style={{ textAlign: "center" }} className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        {titel}
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>

                        {children}

                    </form>
                </div>
            </div>
        </div>
    )




}
export default BasicAnswerForm;
import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../components/AuthContext/AuthContextProvider";
import NavLink from "./NavLink";
import NavButton from "./NavButton";


const Layout = () => {

    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("jwt") === null ? false : true);
    }, [isLoggedIn])

    function logout() {
        localStorage.removeItem("jwt");
        setIsLoggedIn(false);
    }


    return (
        <>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="landing" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Notice</span>
                    </a>
                    <div className="flex md:order-2">
                        {isLoggedIn && <NavButton link={"/login"} name={"Logout"} onClick={() => { logout() }} />}
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {isLoggedIn ? <>
                                <NavLink link={"/posts"} name={"Posts"} />
                                <NavLink link={"/create"} name={"Notice"} />
                            </> : <>
                                <NavLink link={"/login"} name={"Sign in"} />
                                <NavLink link={"/register"} name={"Register"} />
                            </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;

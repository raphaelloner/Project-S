import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../components/AuthContext/AuthContextProvider";
import NavButton from "./NavButton";
import Logout from "./NavButton";

function logout() {
    localStorage.removeItem("jwt");
}

const Layout = () => {

    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("jwt") === null ? false : true)
    }, [isLoggedIn])
    return (
        <div className="bg-slate-500">
            {!isLoggedIn
                ?
                <NavButton link="/login" name="Login" />

                : <>
                    <Logout link={"/login"} name={"Logout"} onClick={() => { logout(); setIsLoggedIn(false); }} />
                    <NavButton link={"/posts"} name={"Posts"} />
                    <NavButton link={"/create"} name={"Create"} />
                </>
            }

            <Outlet />
        </div>
    )
};

export default Layout;

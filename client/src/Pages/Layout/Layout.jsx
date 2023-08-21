import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../components/AuthContext/AuthContextProvider";
import NavButton from "./NavButton";

function logout() {
    localStorage.removeItem("jwt");
}

const Layout = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    return (
        <div class="bg-slate-500">
            <p>Project - S</p>
            {!isLoggedIn
                ?
                <NavButton link="/login" name="Login" />

                : <>
                    <NavButton link={"/login"} name="Logout" onClick={() => { logout(); setIsLoggedIn(false); }} />
                    <NavButton link={"/posts"} name={"Posts"} />
                    <NavButton link={"/create"} name={"Create"} />
                </>
            }

            <Outlet />
        </div>
    )
};

export default Layout;

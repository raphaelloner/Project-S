import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../components/AuthContext/AuthContextProvider";

function logout() {
    localStorage.removeItem("jwt");
}

const Layout = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    return (
        <div>
            <p>Project - S</p>
            {!isLoggedIn
                ? <Link to="/login"> <button type="button" >Login</button></Link>
                : <>
                    <Link to="/login"> <button onClick={() => { logout(); setIsLoggedIn(false); }} >Logout</button></Link>
                    <Link to="/posts"><button type="button">All Posts</button></Link>
                    <Link to="/create"><button type="button">Create Post</button></Link>
                </>
            }

            <Outlet />
        </div>
    )
};

export default Layout;

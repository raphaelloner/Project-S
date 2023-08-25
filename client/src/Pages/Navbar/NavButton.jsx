import { Link } from "react-router-dom";
const NavButton = ({ link, name, onClick }) => {

    return (
        <>
            <Link to={link}> <button onClick={onClick} type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >{name}</button></Link>
        </>
    )
}
export default NavButton;
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export const Footer = ()=>{
    return (
        <div className="bg-black flex flex-row justify-around p-4 ">
            <img src={logo} ></img>
            <div className="text-white font-inter text-3md flex flex-col justify-center">
                <Link to="/about" >About</Link>
                <Link to="/contact-us">Contact-Us</Link>
            </div>
        </div>
    )
}
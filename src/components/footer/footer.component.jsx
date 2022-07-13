import Button from "../button/button.components";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full max-w-4xl flex justify-center gap-8 py-4 mx-auto mt-24">
            {
                [<AiFillGithub className="mx-auto group-hover:text-indigo-500 text-white" />, <AiOutlineTwitter className="mx-auto group-hover:text-indigo-500 text-white" />, <FaLinkedin className="mx-auto group-hover:text-indigo-500 text-white" />].map(icon => (
                    <Button key={Math.random()*100}>{icon}</Button>
                ))
            }
        </footer>
    )
}

export default Footer;
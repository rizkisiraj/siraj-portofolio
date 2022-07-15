import Button from "../button/button.components";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const footerElements = [
    {
        link: "https://github.com/rizkisiraj",
        icon: <AiFillGithub className="mx-auto" />
    },
    {
        link: "https://twitter.com/fatbritishian",
        icon: <AiOutlineTwitter className="mx-auto" />
    },
    {
        link: "https://www.linkedin.com/in/muhammad-rizki-siraj-1b045b21a/",
        icon: <FaLinkedin className="mx-auto" />
    },
]

const Footer = () => {
    return (
        <footer className="w-full max-w-4xl flex justify-center gap-8 py-4 mx-auto mt-24">
            {
                footerElements.map(icon => (
                    <a key={Math.floor(Math.random() * 100)} target="_blank" rel="noreferrer" href={icon.link}><Button variant="menu" key={Math.random()*100}>{icon.icon}</Button></a>
                ))
            }
        </footer>
    )
}

export default Footer;
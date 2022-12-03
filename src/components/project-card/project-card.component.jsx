import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si"
import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

const ICONS = {
    'tailwind' : <SiTailwindcss className="mx-auto" />,
    'react'    : <FaReact className="mx-auto" />,
    'firebase' : <SiFirebase className="mx-auto" />
}

const ProjectCard = ({data, setSelectedId}) => {
    const [loaded, setLoaded] = useState(false);
    const {title, description, picture, githubLink, webLink} = data;

    return (
        <div className="flex p-4 dark:bg-slate-700/20 bg-indigo-500/50 hover:bg-indigo-500 dark:hover:bg-slate-700 justify-between rounded-xl flex-col transition-all relative group">
            <div onClick={() => setSelectedId(data)} className="h-40 mb-4 w-full cursor-pointer" >
                <img className={`w-full h-full rounded-lg ${loaded ? null : "blur-sm"}`} src={picture} alt={title} onLoad={() => setLoaded(true)} />
            </div>
            <div className="md:flex-1">
                <h1 className="text-xl font-bold text-white dark:text-white mb-4">{title}</h1>
                <p className="text-white dark:text-slate-300 mb-4">{description}</p>
            </div>
                    
            <div className="relative md:absolute md:bottom-5 md:translate-y-14 md:group-hover:translate-y-0 transition-all md:opacity-0 md:group-hover:opacity-100 flex">
                { webLink && <a className="text-3xl block p-3 dark:text-white rounded-full bg-white text-indigo-500 dark:bg-indigo-500 hover:shadow-2xl shadow-black mr-4" aria-label="link" href={webLink} target="_blank" rel="noreferrer">
                    <AiOutlineLink />
                </a>
                }
                <a href={githubLink} className="text-3xl block  p-3 dark:text-white rounded-full bg-white text-indigo-500 dark:bg-indigo-500 shadow-2xl" aria-label="github" target="_blank" rel="noreferrer">
                    <AiOutlineGithub />
                </a>
            </div>
        </div>
    )
}

export default ProjectCard;
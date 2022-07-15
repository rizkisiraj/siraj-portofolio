import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si"
import Button from "../button/button.components";
import { useState } from "react";

const ICONS = {
    'tailwind' : <SiTailwindcss className="mx-auto" />,
    'react'    : <FaReact className="mx-auto" />,
    'firebase' : <SiFirebase className="mx-auto" />
}

const ProjectCard = ({data}) => {
    const [loaded, setLoaded] = useState(false);
    const {title, description, picture, stack} = data;

    return (
        <div className="flex p-6 bg-indigo-500 dark:bg-transparent dark:border justify-between rounded-xl mb-4 md:flex-row flex-col">
            <div className="rounded-md md:w-80 md:mr-8 md:mb-0 mb-4 w-full" >
                {

                    <img className={`w-full h-full rounded-lg ${loaded ? null : "blur-sm"}`} src={picture} alt={title} onLoad={() => setLoaded(true)} />
                }
            </div>
            <div className="md:flex-1">
                <h1 className="text-3xl font-bold text-white mb-4">{title}</h1>
                <p className="text-white mb-4">{description}</p>
                <div className="flex md:gap-4 gap-1">
                    {
                        stack.map(icon => {
                            return (
                            <Button variant="badge" key={Math.floor(Math.random() * 100)}>
                                {
                                    ICONS[icon]
                                }
                            </Button>        
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
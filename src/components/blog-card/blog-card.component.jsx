import { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
const BlogCard = ({data}) => {
    const [loaded, setLoaded] = useState(false);
    const {title, photoURL, link} = data;


    return (
        <div className="flex p-4 bg-indigo-700/50 hover:bg-indigo-700 dark:bg-slate-700/20 dark:hover:bg-slate-700 justify-between rounded-xl flex-col transition-all relative group">
            <div className="h-40 mb-4 w-full" >
                <img className={`w-full h-full rounded-lg ${loaded ? null : "blur-sm"}`} src={photoURL} alt={title} onLoad={() => setLoaded(true)} />
            </div>
            <div className="md:flex-1">
                <h1 className="text-xl font-bold text-white mb-4">{title}</h1>
            </div>
            <div className="relative md:absolute md:bottom-5 md:translate-y-14 md:group-hover:translate-y-0 transition-all md:opacity-0 md:group-hover:opacity-100 flex">
                <a href={link} className="text-3xl block  p-3 text-white rounded-full bg-indigo-500 shadow-2xl" aria-label="github" target="_blank" rel="noreferrer">
                <AiOutlineLink />
                </a>
            </div>
        </div>
    )
}

export default BlogCard;
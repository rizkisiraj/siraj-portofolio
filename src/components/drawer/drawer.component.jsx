import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Drawer = ({showHandler}) => {

    return (
        <div className="w-full h-screen overflow-hidden bg-slate-800 bg-opacity-80 z-30 absolute">
            <motion.nav initial={{x:100}} animate={{x:0}} className="w-64 bg-white h-full absolute right-0">
            <NavLink onClick={showHandler} to="/" className={({ isActive }) => isActive ? "transition-all block bg-slate-800 dark:bg-indigo-500 rounded-sm p-7 text-white  mt-16" : "mt-16 text-black transition-all block  rounded-sm p-7"} ><span className="text-xl font-bold">About</span></NavLink>
                        <NavLink onClick={showHandler} className={({ isActive }) => isActive ? "transition-all block bg-slate-800 dark:bg-indigo-500 rounded-sm p-7 text-white " : "text-black transition-all block  rounded-sm p-7"} to={"/blog"} ><span className="text-xl font-bold">Blog</span></NavLink>
                        <NavLink onClick={showHandler} className={({ isActive }) => isActive ? "transition-all block bg-slate-800 dark:bg-indigo-500 rounded-sm p-7 text-white " : "text-black transition-all block  rounded-sm p-7"} to={"/projects"} ><span className="text-xl font-bold">Projects</span></NavLink>
            </motion.nav>
        </div>
    )
    
}

export default Drawer;
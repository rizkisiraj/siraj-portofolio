import { NavLink, Outlet } from "react-router-dom";
import { BsSun, BsMoonFill } from 'react-icons/bs'
import Button from "../../components/button/button.components";
import Footer from "../../components/footer/footer.component";
import { AiOutlineMenu } from 'react-icons/ai'
import { useEffect, useState } from "react";
import Drawer from "../../components/drawer/drawer.component";
import fotoProfil from "../../assets/avatar.png"




const Navigation = () => {
    const [theme, setTheme] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {

        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme(true)
        } else {
            setTheme(false)
        }

    },[])

    useEffect(() => {
        if(show) {
            document.body.classList.add("show");
        } else {
            document.body.classList.remove("show");
        }
    },[show])

    useEffect(() => {
        if(theme) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    },[theme])

    return (
        <>
        <div className="w-full h-3 bg-gradient-to-r from-indigo-500 to-blue-500 mb-16"></div>
           {show ? <Drawer showHandler={() => setShow(!show)} /> : null } 
            <nav className="mx-auto w-full max-w-4xl flex justify-between items-center px-4 md:px-0 mb-16">
                <div className="flex items-center gap-8">
                    <div className="h-20 w-20 border-4 border-indigo-500 rounded-full">
                        <img className="rounded-full w-full h-full" src={fotoProfil} alt="foto-profil" loading="lazy" />
                    </div>
                    <nav className="hidden md:block">
                        <NavLink to="/" className={({ isActive }) => isActive ? "transition-all bg-slate-800 dark:bg-indigo-500 rounded-sm px-3 py-2 text-indigo-500 dark:text-white" : "text-black transition-all dark:text-white rounded-sm px-3 py-2"} ><span className="text-base">About</span></NavLink>
                        <NavLink className={({ isActive }) => isActive ? "transition-all bg-slate-800 dark:bg-indigo-500 rounded-sm px-3 py-2 text-indigo-500 dark:text-white mx-8" : "text-black transition-all dark:text-white rounded-sm px-3 py-2 mx-8"} to={"/blog"} ><span className="text-base">Blog</span></NavLink>
                        <NavLink className={({ isActive }) => isActive ? "transition-all bg-slate-800 dark:bg-indigo-500 rounded-sm px-3 py-2 text-indigo-500 dark:text-white" : "text-black transition-all dark:text-white rounded-sm px-3 py-2"} to={"/projects"} ><span className="text-base">Projects</span></NavLink>
                    </nav>
                </div>
                <div className="flex items-center">
                <Button aria-label="theme switch" variant="menu" onClick={() => setTheme(!theme)}>
                    {
                        <>
                        <BsSun className={`absolute left-1/2 -translate-x-1/2 bottom-1/2 ${theme ? "translate-y-1/2" : "-translate-y-48"} transition-all le mx-auto`} />
                        <BsMoonFill className={`absolute left-1/2 -translate-x-1/2 bottom-1/2 ${!theme ? "translate-y-1/2" : "translate-y-48"} transition-all le mx-auto`} />
                        </>
                    }
                    
                </Button>
                <button aria-label="menu" className="h-12 w-12 md:hidden rounded-md border border-black hover:border-indigo-500 dark:hover:border-indigo-500 dark:border-white text-center ml-4 text-black dark:text-white relative" onClick={() => setShow(!show)}>
                    <AiOutlineMenu className="mx-auto text-xl " />
                </button>
                </div>
            </nav>
            <main className="w-full max-w-3xl mx-auto px-8 flex-1" >
            <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Navigation;
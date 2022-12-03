import { HiMenuAlt3 } from 'react-icons/hi';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from "react";
import NavDrawer from "../../components/header/navDrawer.component";




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
        <div className="w-full flex relative">
            <button onClick={() => setShow(true)} aria-label="menu-bar" className="sm:hidden bg-white rounded-md z-10 w-16 h-16 fixed shadow-md right-5 top-5 text-4xl text-indigo-500 dark:text-white text-center">
                <HiMenuAlt3 className="mx-auto" />
            </button>
          <NavDrawer setShow={setShow} setTheme={setTheme} theme={theme} type="sidebar"/>
          <main className="w-full sm:ml-[62px] lg:ml-[250px] dark:bg-slate-800 bg-navbar-light" >
            <Outlet />
          </main>
          {
            show && <NavDrawer setShow={setShow} setTheme={setTheme} theme={theme} type="mobile"/> 
          }
        </div>
        </>
    )
}

export default Navigation;
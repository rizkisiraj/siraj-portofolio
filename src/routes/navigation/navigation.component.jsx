import { NavLink, Outlet } from "react-router-dom";
import { BsSun } from 'react-icons/bs'
import Button from "../../components/button/button.components";
import Footer from "../../components/footer/footer.component";

const fotoProfil = "https://i.picsum.photos/id/760/200/200.jpg?hmac=MlH81fLiPAKVmDN5qADWkd_299jLg9vp9uVnRn3uxp8";

const Navigation = () => {
    return (
        <>
        <div className="w-full h-3 bg-gradient-to-r from-indigo-500 to-blue-500 mb-16"></div>
            <nav className="mx-auto w-full max-w-4xl flex justify-between items-center mb-16">
                <div className="flex items-center gap-8">
                    <div className="h-20 w-20 border-4 border-indigo-500 rounded-full">
                        <img className="rounded-full" src={fotoProfil} alt="foto-profil" />
                    </div>
                    <nav>
                        <NavLink to="/" className="bg-slate-800 p-3 rounded-sm" ><span className="text-base text-white">About</span></NavLink>
                        <NavLink className="bg-slate-800 p-3 rounded-sm" to={"/"} ><span className="text-base text-white mx-8">Blog</span></NavLink>
                        <NavLink className="bg-slate-800 p-3 rounded-sm" to={"/"} ><span className="text-base text-white">Projects</span></NavLink>
                    </nav>
                </div>
                <Button> 
                    <BsSun className="mx-auto group-hover:text-indigo-500 text-white"></BsSun>
                </Button>
            </nav>
            <Outlet />
            <Footer />
        </>
    )
}

export default Navigation;
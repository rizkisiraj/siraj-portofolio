import { NavLink } from "react-router-dom";
import { AiFillCode, AiFillHome, AiFillGithub, AiOutlineTwitter, AiOutlineClose } from "react-icons/ai"
import { FaNewspaper, FaLinkedin } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { motion } from "framer-motion";

const footerElements = [
  {
      id: "github",
      link: "https://github.com/rizkisiraj",
      icon: <AiFillGithub className="mx-auto" />,
      text: "Github"
  },
  {
      id: "linkedin",
      link: "https://www.linkedin.com/in/muhammad-rizki-siraj-1b045b21a/",
      icon: <FaLinkedin className="mx-auto" />,
      text: "Linkedin"
  },
]

const types = {
  "sidebar": "hidden bg-indigo-500 sm:flex w-[62px] lg:w-[250px] h-screen dark:bg-gray-900 font-sans px-4 top-0 left-0 overflow-hidden fixed transition-all z-50 flex-col justify-between",
  "mobile" : "bg-indigo-500 sm:hidden w-[250px] h-screen dark:bg-gray-900 font-sans px-4 top-0 right-0 overflow-hidden fixed transition-all z-50 flex-col justify-between"
}

const NavDrawer = ({ setTheme, theme, type, setShow }) => {
  return (
    <motion.aside initial={{x:100}} animate={{x:0}} className={types[type]}>
      <div className="flex-grow">
        <div className={`py-10 ${type === 'mobile' ? 'flex justify-between' : ''}`}>
          <BsThreeDots className="text-3xl  text-white text-center" />
          {type === "mobile" && <button onClick={() => setShow(false)}><AiOutlineClose className="text-3xl  text-white text-center" /></button>}
        </div>
        <nav className="w-full border-white border-b mb-12 pb-12">
          <NavLink to='/' className={ ({isActive}) => `flex gap-4 text-white items-end text-lg mb-4 ${isActive ? 'font-bold dark:text-indigo-500' : ''}`}><span className="text-3xl block w-8 "><AiFillHome /></span> Home</NavLink>
          <NavLink to='/blog' className={ ({isActive}) => `flex gap-4 text-white items-end text-lg mb-4 ${isActive ? 'font-bold dark:text-indigo-500' : ''}`}><span className="text-3xl block w-8 "><FaNewspaper /></span> Blogs</NavLink>
          <NavLink to='/projects' className={ ({isActive}) => `flex gap-4 text-white items-end text-lg mb-4 ${isActive ? 'font-bold dark:text-indigo-500' : ''}`}><span className="text-3xl block w-8 "><AiFillCode /></span> Projects</NavLink>
        </nav>
        <div>
          {
            footerElements.map(elem => {
              return (
                <a key={elem.id} href={elem.link} className='transition-all dark:hover:text-indigo-500 flex gap-4 text-white items-end text-lg mb-4'><span className="text-3xl">{elem.icon}</span> {elem.text}</a>
              )
            })
          }
        </div>
      </div>
      <div className="py-4">
        <label className="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" onChange={() => setTheme(!theme)} checked={theme === true ? true : false} className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-white dark:text-gray-300">Mode</span>
        </label>
      </div>
    </motion.aside>
  )
}

export default NavDrawer;

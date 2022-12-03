import { AiFillHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { SiCss3, SiJavascript, SiTypescript } from "react-icons/si";

const skillData = [
{
    id: "skillHTML5",
    icon:<AiFillHtml5 />,
    title: "HTML5",
    text: "HTML5 For Making Website"
},
{
    id: "skillCSS3",
    icon:<SiCss3 />,
    title: "CSS3",
    text: "CSS3 For Styling Website"
},
{
    id: "skillJavascript",
    icon:<SiJavascript />,
    title: "Javascript",
    text: "Javascript to Make Website Interactive"
},
{
    id: "skillTypescript",
    icon:<SiTypescript />,
    title: "Typescript",
    text: "Typescript to Leverage Javascript"
},
{
    id: "skillReact",
    icon:<FaReact />,
    title: "React",
    text: "React to Maximize Building WebApp"
},
]

const SkillCard = () => {
    return (
        <div className="w-full rounded-xl p-4">
            {
                skillData.map(skill => {
                    return (
                    <div className="flex group gap-4 mb-4 items-center last:mb-0 hover:bg-gray-300 dark:hover:bg-slate-700 px-4 py-1 cursor-pointer transition-all" key={skill.id}>
                        <div className="w-10 h-10 bg-indigo-500 text-4xl flex justify-center items-center text-white">
                            {skill.icon}
                        </div>
                        <div>
                            <h3 className="dark:text-white text-gray-500 group-hover:text-black dark:group-hover:text-white font-semibold">{skill.title}</h3>
                            <p className="dark:text-slate-300 text-gray-500 group-hover:text-black dark:group-hover:text-white">{skill.text}</p>
                        </div>
                    </div>
                    )
                } 
                )
            }
        </div>
    )
}

export default SkillCard;
import { FaReact } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiMaterialui } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import Card from '../../components/card/card.component';
import { motion } from 'framer-motion';
import { Fragment } from 'react';

const skillSets = [
    {
        name: "React",
        icon: <FaReact />
    },
    {
        name: "HTML",
        icon: <AiFillHtml5 />
    },
    {
        name: "CSS",
        icon: <DiCss3 />
    },
    {
        name: "Material UI",
        icon: <SiMaterialui />
    },
    {
        name: "Tailwind",
        icon: <SiTailwindcss />
    },
]

const Home = () => {

    return ( 
        <motion.section initial={{y:400}} animate={{y:0}} >
        <div className="mb-16">
            <h1 className="transition-all text-5xl font-sans capitalize font-bold text-black dark:text-indigo-500 mb-12 max-w-fit ">Hi, i’m <span className='transition-all bg-indigo-500 dark:bg-transparent'>rizki Siraj</span> 👋</h1>
        <p className="font-sans font-bold dark:text-white transition-all">
        I’m a Computer Science student who is currently learning about web development.
            This is my art canvas  where i implemented my thoughts and the outcome of my learning.
        </p>
        </div>
        <div>
            <h2 className="font-sans font-bold text-black dark:text-indigo-500 text-4xl mb-8 transition-all"><span className='transition-all dark:bg-transparent bg-indigo-500 '>Skills</span> 👨‍💻</h2>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    skillSets.map(skill => <Card key={Math.random()*100} name={skill.name} icon={skill.icon} />)
                }
            </div>
        </div>
    </motion.section>
    )
}

export default Home;
import { useEffect, useRef, useState } from 'react';
import { onBlogSnapshotHandler, onSnapshotHandler } from "../../utils/firebase/firebase";
import Profile from '../../assets/DSC09663.png';
import AboutCard from '../../components/aboutCard/aboutCard-component';
import SkillCard from '../../components/skillCard/skillCard.component';
import ProjectCard from '../../components/project-card/project-card.component';
import { useAnimation, useInView, motion } from 'framer-motion';
import BlogCard from '../../components/blog-card/blog-card.component';

const boxVariant = {
    visible: { opacity: 1, y:0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 }
};

const Home = () => {

    const control = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);

    const [projectsData, setProjectsData] = useState([]);
    const [blogsData, setBlogsData] = useState([])

    useEffect(() => {
        const unsubscribe = onSnapshotHandler((snapshot) => {
            let dataDump = [];
            snapshot.forEach(snap => dataDump = [...dataDump, snap.data()])
            setProjectsData(dataDump);

        })
        
        return unsubscribe;
    },[])

    useEffect(() => {
        const unsubscribe = onBlogSnapshotHandler((snapshot) => {
            let dataDump = [];
            snapshot.forEach(snap => dataDump = [...dataDump, snap.data()])
            setBlogsData(dataDump);

        })
        
        return unsubscribe;
    },[])

    return ( 
        <section className='font-sans h-full'>
            <div className='w-full min-h-72 bg-gradient-to-b from-indigo-500 to-blue-800 relative p-8 flex lg:flex-row flex-col lg:gap-8'>
                <div className='rounded-full w-56 h-56 overflow-hidden bg-blue-300 shadow-2xl shadow-black/50'>
                    <img className='w-full h-full object-cover' src={Profile} alt="siraj-profile" />
                </div>
                <article className='flex flex-col justify-center gap-5'>
                  <h1 className='font-semibold text-white uppercase'>Profile</h1>
                  <p className='font-bold text-white text-3xl'>Muhammad Rizki Siraj</p>
                  <p className='font-semibold text-white'>React Developer | Frontend Developer</p>
                </article>
            </div>
            <motion.div variants={boxVariant}
      initial="hidden"
      animate={control} ref={ref} className='p-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                    <h2 className='font-bold lg:text-xl mx-auto text-center text-indigo-500 dark:text-white mb-4'>About Me</h2>
                    <AboutCard />
                </div>
                <div>
                <h2 className='font-bold lg:text-xl mx-auto text-center text-indigo-500 dark:text-white mb-4'>Skills</h2>
                    <SkillCard />
                </div>
            </motion.div>
            <div className='p-8'>
                <h2 className='font-bold lg:text-xl mx-auto text-left text-indigo-500 dark:text-white mb-4'>Featured Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center'>
                    {
                        projectsData.map((project, i) => {
                            return <ProjectCard data={project} key={`id ${i}`} />
                        })
                    }
                </div>
            </div>
            <div className='p-8'>
                <h2 className='font-bold lg:text-xl mx-auto text-left dark:text-white text-indigo-500 mb-4'>Featured Blogs</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center'>
                    {
                        blogsData.map((blog) => {
                            return <BlogCard data={blog} key={blog.title} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Home;
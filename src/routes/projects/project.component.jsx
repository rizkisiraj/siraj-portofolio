import { lazy, Suspense, useEffect, useState } from "react"
import { onSnapshotHandler } from "../../utils/firebase/firebase";
import { motion } from "framer-motion";
import ProjectCardLoader from "../../components/loader/project-card-loader.component";

const ProjectCard = lazy(() => import("../../components/project-card/project-card.component"));

const Project = () => {
    const [projectsData, setProjectsData] = useState([]);  

    useEffect(() => {
        const unsubscribe = onSnapshotHandler((snapshot) => {
            let dataDump = [];
            snapshot.forEach(snap => dataDump = [...dataDump, snap.data()])
            setProjectsData(dataDump);
        })
        
        return unsubscribe;
    },[])

    return (
        <motion.section initial={{y: 500}} animate={{y: 0}}>
            
                <div className="mb-16">
                <h1 className="text-4xl font-sans capitalize  font-bold dark:text-indigo-500 mb-12 max-w-fit "><span className="dark:bg-transparent bg-indigo-500 ">Projects</span> 🔦</h1>
                </div>
                
                {
                projectsData.map(data => {
                    return (
                        <Suspense key={Math.floor(Math.random() * 100)} fallback={<ProjectCardLoader />}>
                        <ProjectCard  data={data} />
                        </Suspense>
                    )
                })
                }
                

                
                
        </motion.section>
    )
}

export default Project;
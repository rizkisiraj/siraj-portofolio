import { lazy, Suspense, useEffect, useState } from "react"
import { onSnapshotHandler } from "../../utils/firebase/firebase";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCardLoader from "../../components/loader/project-card-loader.component";
import Modal from "../../components/modal/modal.component";
const ProjectCard = lazy(() => import("../../components/project-card/project-card.component"));


const Project = () => {
    const [projectsData, setProjectsData] = useState([]);
    const [loader, setLoader] = useState(false);  
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        const unsubscribe = onSnapshotHandler((snapshot) => {
            let dataDump = [];
            snapshot.forEach(snap => dataDump = [...dataDump, snap.data()])
            setProjectsData(dataDump);
            setLoader(true)

        })
        
        return unsubscribe;
    },[]);


    return (
        <section className="font-sans p-8">
                <div className="mb-16">
                <h1 className="font-bold text-4xl text-indigo-500 dark:text-white">Projects</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                     loader ?  projectsData.map(data => {
                            return (
                                <ProjectCard key={data.title} data={data} setSelectedId={setSelectedId} />
                            )
                        }) : <ProjectCardLoader />
                    }
                </div>
                <AnimatePresence>
                {
                    selectedId && <Modal selectedId={selectedId} setSelectedId={setSelectedId} />
                }
                </AnimatePresence>
        </section>
    )
}

export default Project;
import ProjectCard from "../project-card/project-card.component";

const ProjectsGroup = ({projectList}) => {
    return (
       projectList && projectList.map(data => {
        return (
            <ProjectCard key={Math.floor(Math.random() * 100)} data={data} />
        )
       })
    )
}

export default ProjectsGroup;
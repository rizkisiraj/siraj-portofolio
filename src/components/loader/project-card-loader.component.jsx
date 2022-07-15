const ProjectCardLoader = () => {
    return (

    <div className="w-full p-6 flex md:flex-row gap-4 flex-col rounded-xl animate-pulse justify-between">
        <div className="w-full h-44 rounded-md bg-slate-500"></div>
        <div className="w-full flex rounded-md gap-2 flex-col">
            <div className="w-full rounded-md h-14 bg-slate-500"></div>
            <div className="w-full flex-1 rounded-md bg-slate-500"></div>
        </div>
    </div>
    )
}

export default ProjectCardLoader;
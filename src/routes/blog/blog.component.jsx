import { useEffect, useState } from "react";
import BlogCard from "../../components/blog-card/blog-card.component";
import ProjectCardLoader from "../../components/loader/project-card-loader.component";
import { onBlogSnapshotHandler } from "../../utils/firebase/firebase";


const Blog = () => {
    const [blogsData, setBlogsData] = useState([]);
    const [loader, setLoader] = useState(false);  

    useEffect(() => {
        const unsubscribe = onBlogSnapshotHandler((snapshot) => {
            let dataDump = [];
            snapshot.forEach(snap => dataDump = [...dataDump, snap.data()])
            setBlogsData(dataDump);
            setLoader(true)
        })
        
        return unsubscribe;
    },[])

    return (
        <section className="font-sans p-8">
        <div className="mb-16">
        <h1 className="font-bold text-4xl dark:text-white text-indigo-500">Blogs</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {
             loader ?  blogsData.map(data => {
                    return (
                        <BlogCard key={data.title} data={data} />
                    )
                }) : <ProjectCardLoader />
            }
        </div>
        
</section>
    )
}

export default Blog;
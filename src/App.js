import Navigation from "./routes/navigation/navigation.component";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Blog from "./routes/blog/blog.component";
import Project from "./routes/projects/project.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="projects" element={<Project />} />
      </Route>
    </Routes>
  );
}

export default App;

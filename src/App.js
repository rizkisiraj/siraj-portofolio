import Navigation from "./routes/navigation/navigation.component";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./routes/home/home.component"))
const Blog = lazy(() => import("./routes/blog/blog.component"))
const Project = lazy(() => import("./routes/projects/project.component"))

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={
        <Suspense fallback={<div>loading...</div>}>
          <Home />
        </Suspense>
        } />
        <Route path="blog">
          <Route index element={
            <Suspense fallback={<div>loading...</div>}>
              <Blog />
            </Suspense>
          } />

        </Route>
        <Route path="projects" element={ 
          <Suspense fallback={<div>loading...</div>}>
          <Project />
        </Suspense>
        } />
      </Route>
    </Routes>
  );
}

export default App;

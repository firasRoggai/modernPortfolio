import React from 'react'
import Header from './Container/header/header'
import ProjectsContainer from './Container/projectsContainer/ProjectsContainer'
import BlogPost from './Container/blogPost/BlogPost'
import Footer from './Component/Footer/Footer'
const App = ()=>{
    return (
        <main>
        <Header />
        <ProjectsContainer />
        <BlogPost/>
        <Footer/>
        </main>
    )
}
export default App;

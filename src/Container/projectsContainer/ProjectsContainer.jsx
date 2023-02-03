import React from 'react'
import './projectsContainer.scss'
import Projects from  '../../Component/projects/Projects'
import {FiArrowUpRight} from 'react-icons/fi'

const ProjectsContainer = ()=>{
    return (
        <>
        <div className='d-flex align-items-center justify-content-between px-2 my-3'>
            <h2 className='fw-bold'>Projects</h2>
            <a className='text-white' href="http://" target="_blank" rel="noopener noreferrer">
                <FiArrowUpRight style={{fontSize: '2rem'}} />
            </a>
        </div>
        <Projects />
        </>
    )
}
export default ProjectsContainer;

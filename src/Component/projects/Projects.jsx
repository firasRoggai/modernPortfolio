import React from 'react'
import './projects.scss'
// icons:
import {FcAreaChart,FcBinoculars,FcCamera,FcElectronics} from 'react-icons/fc'

const Projects = () => {
    let result = [
        { name: 'AlgerialLogos', icon: <FcAreaChart className='icon'/>, description: 'the bot fetches stories of any Snapchat user' },
        { name: 'Pazar', icon: <FcBinoculars className='icon' />, description: 'the bot fetches stories of any Snapchat user' },
        { name: 'Landing', icon: <FcCamera className='icon' />, description: 'the bot fetches stories of any Snapchat user' },
        { name: 'AppLanding', icon: <FcElectronics className='icon' />, description: 'the bot fetches stories of any Snapchat user' }
    ].map((element) => { 
        let {name , icon , description} = element
        return <div key={name} className="project-item py-3">
            {icon}
            <div className="content px-3">
                <h5>{name}</h5>
                <span style={{color:'#bbbbbb'}}>{description}</span>
            </div>
        </div>
    })
    return (
        <div className='projects-container'>
            {result}
        </div>
    )
}
export default Projects;

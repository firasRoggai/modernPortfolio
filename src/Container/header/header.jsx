import React from 'react'
import Contact from '../../Component/contacts/Contacts'
import './header.scss'

const header = ()=>{
    return (
        <header className='px-2'>
        <h1 className='fw-bold pb-3' style={{fontFamily: 'Hubot Sans,sans-serif'}}>Hello, <br/>I'm Firas.</h1>
        <p>Frontend devolper & engineer <br />
        Currently working as a freelancer <br />
        Software developer with a love for problem-solving and building user-friendly apps.</p>
        <Contact />
        </header>
    )
}
export default header;

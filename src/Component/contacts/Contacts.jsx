import React from 'react'
import './contacts.scss'
import Button from 'react-bootstrap/Button';
import { BsGithub, BsTelegram } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import { RiPagesFill } from "react-icons/ri";
const Contacts = () => {
    let content = [{ icon: <BsGithub />, text: 'Github', link: "https://github.com/firasRoggai" }, { icon: <RiPagesFill />, text: 'Blog', link: "#" }, { icon: <BsTelegram />, text: '', link: "https://t.me/Albert_Ei" }, { icon: <SiDiscord />, text: '', link: "https://discord.com/users/573895146588864525" }]
        .map((element, index) => {
            return <Button key={index} className='contact-btn px-3 py-2 me-2'>
                <a className='text-white' href={element.link} target="_blank" rel="noopener noreferrer">
                    {element.icon} <span className={element.text ? 'mx-1' : ''}>{element.text}</span>
                </a>
            </Button>

        })
    return (
        <div className='contact-container'>
            {content}
        </div>
    )
}
export default Contacts;

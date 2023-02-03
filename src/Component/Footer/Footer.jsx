import React from 'react'
import './Footer.scss'

const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return (
        <footer className=' my-3'>
        <p className='text-secondary'>Firas Roggai © {currentYear}</p>
        </footer>
    )
}
export default Footer;

import React from "react"
import { Link } from "react-router-dom"

import './Footer.css'
import SocialMediaBar from "./subComponents/SocialMediaBar"

const Footer = props => {
    return (
        <div className={props.class}>
            <SocialMediaBar />
            <div className='footer-links-group'>
                <Link to='/downloads'>
                    <p className='footer-link'>Downloads</p>
                </Link>
                <Link to='/policies'>
                    <p className='footer-link'>Policies</p>
                </Link>
                <Link to='/contact'>
                    <p className='footer-link'>Contact</p>
                </Link>
            </div>
            <div className='copyright_footer'>
                <p>© 2021 Copyright: Fisher Athletic Equipment</p>
            </div>
        </div>
    )
}

export default Footer
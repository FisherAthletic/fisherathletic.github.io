import React from "react"
import { Link } from "react-router-dom"

import './Footer.css'
import SocialMediaBar from "./subComponents/SocialMediaBar"

const Footer = props => {
    return (
        <div className={props.class}>
            <SocialMediaBar />
            <div class='footer-links-group'>
                <Link to='/downloads' className='download_footer'>
                    <h3>Downloads</h3>
                </Link>
                <Link to='/policies' className='policies'>
                    <h3>Policies</h3>
                </Link>
                <Link to='/contact' className='contact_footer'>
                    <h3>Contact</h3>
                </Link>
            </div>
            <div className='copyright_footer'>
                <p>© 2020 Copyright: Fisher Athletic Equipment</p>
            </div>
        </div>
    )
}

export default Footer
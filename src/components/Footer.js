import React from "react"
import { Link } from "react-router-dom"

import './Footer.css'
import SocialMediaBar from "./subComponents/SocialMediaBar"

const Footer = props => {
    return (
        <div className={props.class}>
            <SocialMediaBar />
            <div class='footer-links-group'>
                <Link to='/downloads'>
                    <h3 className='footer-link'>Downloads</h3>
                </Link>
                <Link to='/policies'>
                    <h3 className='footer-link'>Policies</h3>
                </Link>
                <Link to='/contact'>
                    <h3 className='footer-link'>Contact</h3>
                </Link>
            </div>
            <div className='copyright_footer'>
                <p>© 2021 Copyright: Fisher Athletic Equipment</p>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import './SocialMediaBar.css'

const SocialMediaBar = props => {
    return (
        <div className='social_media_bar_con'>
            <div className='fb_item'>
                <a href="https://www.facebook.com/fisherathletic" title="facebook" target="_blank" rel='noopener noreferrer'>
                    <p><FacebookIcon /></p>
                </a>
            </div>
            <div className='twitter_item'>
                <a href="https://twitter.com/fisher_athletic" title="twitter" target="_blank" rel='noopener noreferrer'>
                    <p><TwitterIcon /></p>
                </a>
            </div>
        </div>
    )
}

export default SocialMediaBar
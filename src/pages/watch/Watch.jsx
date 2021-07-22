import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'

import './watch.scss'

export default function Watch() {
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"

    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video className="video" src={trailer} autoPlay={true} progress="true" controls />
        </div>
    )
}

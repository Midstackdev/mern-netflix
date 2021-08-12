import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './watch.scss'

export default function Watch() {
    const location = useLocation()
    console.log(location)

    return (
        <div className="watch">
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlined />
                    Home
                </div>
            </Link>
            <video className="video" src={location.movie.video} autoPlay={true} progress="true" controls />
        </div>
    )
}

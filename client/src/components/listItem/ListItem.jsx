import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import './listItem.scss'

export default function ListItem({ index, item }) {
    const [isHovered, setIsHovered] = useState(false)
    
    return (
        <Link to={{ pathname: "/watch", movie: item }}>
        <div className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <img 
                src={item.img} 
                alt="" 
                />
            {isHovered && (
                <>
                <video src={item.trailer} autoPlay={true} loop />
                <div className="itemInfo">
                    <div className="icons">
                        <PlayArrow className="icon" />
                        <Add className="icon"/>
                        <ThumbUpAltOutlined className="icon" />
                        <ThumbDownAltOutlined className="icon" />
                    </div>
                    <div className="itemInfoTop">
                        <span>1 hour 14 mins</span>
                        <span className="limit">+{item.limit}</span>
                        <span>{item.year}</span>
                    </div>
                    <div className="desc">
                        {item.desc}
                    </div>
                    <div className="genere">{item.genere}</div>
                </div>
                </>
            )}
        </div>
        </Link>
    )
}

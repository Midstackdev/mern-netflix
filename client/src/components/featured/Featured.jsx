import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './featured.scss'

export default function Featured({ type, setGenre }) {
    const [content, setContent] = useState(null)

    useEffect(() => {
        const getFeatured = async () => {
            try {
                const {data} = await axios.get(`movies/random?type=${type}`)
                setContent(data[0])
            } catch (error) {
                console.log(error)
            }
        }
        getFeatured()
    }, [type])
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
                    <select name="genere" id="genre" onChange={e => setGenre(e.target.value)}>
                        <option value="">Genere</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Crime">Crime</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Historical">Historical</option>
                        <option value="Horor">Horor</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Drama">Drama</option>
                        <option value="western">Western</option>
                        <option value="Animation">Animation</option>
                        <option value="Documentary">Documentary</option>
                    </select>
                </div>
            )}
            
            <img 
                src={content?.img} 
                alt="" 
            />
            <div className="info">
                <img src={content?.imgTitle} alt="" />
                <span className="desc">
                    {content?.desc}
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

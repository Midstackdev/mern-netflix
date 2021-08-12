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
                        <option value="adventure">Adventure</option>
                        <option value="comedt">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horor">Horor</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="drama">Drama</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="documentary">Documentary</option>
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

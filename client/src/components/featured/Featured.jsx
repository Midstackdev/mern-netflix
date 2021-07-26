import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import './featured.scss'

export default function Featured({ type }) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
                    <select name="genere" id="genre">
                        <option>Genere</option>
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
                src="https://cdn.wallpapersafari.com/68/36/q36M2E.jpg" 
                alt="" 
            />
            <div className="info">
                <img src="https://www.pnglib.com/wp-content/uploads/2021/02/gray-avengers-logo_6022329bd3d38.png" alt="" />
                <span className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea autem illum expedita vero repudiandae beatae odio consectetur sint nobis tenetur nisi, quasi at unde quibusdam illo iure nam quis consequuntur optio quisquam, laudantium soluta laborum laboriosam. Sequi rerum nobis ducimus!
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

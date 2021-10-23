import { Publish } from '@material-ui/icons'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './product.css'

export default function Product() {
    const location = useLocation() 
    const movie = location.movie

    return movie ? (
        <>
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Movie</h1>
                <Link to="/products/new">
                    <button className="productAddbutton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={movie.img} alt="" className="productInfoImg" />
                        <span className="productName">{movie.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id</span>
                            <span className="productInfoValue">{movie._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">genere</span>
                            <span className="productInfoValue">{movie.genere}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">year</span>
                            <span className="productInfoValue">{movie.year}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">limit</span>
                            <span className="productInfoValue">{movie.limit}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label htmlFor="">Movie Title</label>
                        <input type="text" name="" id="" placeholder={movie.title} />
                        <label htmlFor="">Year</label>
                        <input type="text" name="" id="" placeholder={movie.year} />
                        <label htmlFor="">Genre</label>
                        <input type="text" name="" id="" placeholder={movie.genre} />
                        <label htmlFor="">Limit</label>
                        <input type="text" name="" id="" placeholder={movie.limit} />
                        <label htmlFor="">Trailer</label>
                        <input type="file" name="" id="" placeholder={movie.trailer} />
                        <label htmlFor="">Video</label>
                        <input type="file" name="" id="" placeholder={movie.video} />
                        <label htmlFor="">In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label htmlFor="">Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={movie.img} alt="" className="productUploadImg" />
                            <label htmlFor="file"><Publish/></label>
                            <input type="file" name="" id="file" style={{ display: 'none' }} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    ) : null
}

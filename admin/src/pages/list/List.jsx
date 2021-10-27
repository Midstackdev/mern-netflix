import { Publish } from '@material-ui/icons'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './list.css'

export default function Product() {
    const location = useLocation() 
    const list = location.list

    return list ? (
        <>
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">List</h1>
                <Link to="/list/new">
                    <button className="productAddbutton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={list.img} alt="" className="productInfoImg" />
                        <span className="productName">{list.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id</span>
                            <span className="productInfoValue">{list._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">genere</span>
                            <span className="productInfoValue">{list.genere}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">type</span>
                            <span className="productInfoValue">{list.type}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label htmlFor="">List Title</label>
                        <input type="text" name="" id="" placeholder={list.title} />
                        <label htmlFor="">Type</label>
                        <input type="text" name="" id="" placeholder={list.type} />
                        <label htmlFor="">Genre</label>
                        <input type="text" name="" id="" placeholder={list.genre} />
                        <label htmlFor="">Active</label>
                    </div>
                    <div className="productFormRight">
                        
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    ) : (
        <div className="product">
            <Link to={`/lists`}>
                    <span className="productListEdit">Back to lists</span>
            </Link>
        </div>
    )
}

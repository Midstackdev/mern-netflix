import React from 'react'
import './newProduct.css'

export default function NewProduct() {
    return (
        <div className="newProduct">
            <h1 className="newProductTitle">New Product</h1>
            <form className="addProductForm">
                <div className="newProductItem">
                    <label htmlFor="">Image</label>
                    <input type="file" id="file" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="item name" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Stock</label>
                    <input type="text" placeholder="123" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Active</label>
                    <select name="active" id="active" className="newProductSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newProductButton">Add</button>
            </form>
    </div>
    )
}

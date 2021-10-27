import React, { useContext, useEffect, useState } from 'react'


import './newList.css'
import { MovieContext } from '../../context/movieContext/MovieContext';
import { useHistory } from 'react-router';
import { ListContext } from '../../context/listContext/ListContext';
import { getMovies } from '../../context/movieContext/ApiRequests';
import { addList } from '../../context/listContext/ApiRequests';

export default function NewList() {
    const [list, setList] = useState(null)
    
    const {dispatch} = useContext(ListContext)
    const {movies, dispatch: dispatchMovie} = useContext(MovieContext)
    const history = useHistory()

    useEffect(() => {
        getMovies(dispatchMovie)
    }, [dispatchMovie])

    const handleChange = (e) => {
        const value = e.target.value
        setList({ ...list, [e.target.name]: value })
    }
    
    const handleSelect = (e) => {
        let value = Array.from(e.target.selectedOptions, option => option.value)
        // console.log(Array.from(e.target.selectedOptions, option => option.value))
        setList({ ...list, [e.target.name]: value, 'contains': value })
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        addList(list, dispatch)
        setList(null)
        history.push('/lists')
    }
    
    return (
        <div className="newProduct">
            <h1 className="newProductTitle">New Movie</h1>
            <form className="addProductForm">
                <div className="formLeft">
                    <div className="newProductItem">
                        <label htmlFor="">Title</label>
                        <input type="text" placeholder="The Snipper" name="title" onChange={handleChange} />
                    </div>
                    <div className="newProductItem">
                        <label htmlFor="">Genre</label>
                        <input type="text" placeholder="genre" name="genre" onChange={handleChange} />
                    </div>
                </div>
                <div className="formRight">
                    <div className="newProductItem">
                        <label htmlFor="">Type</label>
                        <select name="type" id="type" className="newProductSelect" onChange={handleChange}>
                            <option>Type</option>
                            <option value="movie">Movie</option>
                            <option value="series">Series</option>
                        </select>
                    </div>
                    <div className="newProductItem">
                        <label htmlFor="">Content</label>
                        <select multiple name="content" id="content" onChange={handleSelect} style={{ height: '300px'}}>
                            {movies.map(movie => (
                                <option value={movie._id} key={movie._id}>{movie.title}</option>
                            ))}
                        </select>
                    </div>
                </div>
                
                <button className="newProductButton" onClick={handleSubmit}>Add</button>
                
            </form>
    </div>
    )
}

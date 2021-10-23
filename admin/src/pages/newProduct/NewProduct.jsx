import React, { useContext, useState } from 'react'
import {storage} from '../../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import './newProduct.css'
import { addMovie } from '../../context/movieContext/ApiRequests';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { useHistory } from 'react-router';

export default function NewProduct() {
    const [movie, setMovie] = useState(null)
    const [img, setImg] = useState(null)
    const [imgTitle, setImgTitle] = useState(null)
    const [imgSm, setImgSm] = useState(null)
    const [trailer, setTrailer] = useState(null)
    const [video, setVideo] = useState(null)
    const [uploaded, setUploaded] = useState(0)
    const {dispatch} = useContext(MovieContext)
    const history = useHistory()

    const handleChange = (e) => {
        const value = e.target.value
        setMovie({ ...movie, [e.target.name]: value })
    }

    const upload = (items) => {
        items.forEach(item => {
            const fileName = `${new Date().getTime()}_${item.label}_${item.file.name}`
            const uploadTask = uploadBytesResumable(ref(storage, `/items/${fileName}`), item.file)
            uploadTask.on('state_changed', 
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    console.log(`Upload is ${progress}% done`)
                }, 

                (error) => (console.log(error)),

                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        setMovie((prev) => {
                            return { ...prev, [item.label]: downloadURL }
                        })
                        setUploaded((prev) => prev + 1 )
                    })
                }
            )
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addMovie(movie, dispatch)
        setUploaded(0)
        setMovie(null)
        history.push('/movies')
    }
    
    const handleUpload = (e) => {
        e.preventDefault()
        upload([
            {file: img, label: 'img'},
            {file: imgSm, label: 'imgSm'},
            {file: imgTitle, label: 'imgTitle'},
            {file: video, label: 'video'},
            {file: trailer, label: 'trailer'},
        ])

    }
    
    return (
        <div className="newProduct">
            <h1 className="newProductTitle">New Movie</h1>
            <form className="addProductForm">
                <div className="newProductItem">
                    <label htmlFor="">Image</label>
                    <input type="file" id="img" name="img" onChange={(e) => setImg(e.target.files[0])} />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Title Image</label>
                    <input type="file" id="imgTitle" name="imgTitle" onChange={(e) => setImgTitle(e.target.files[0])} />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Thumbnail Image</label>
                    <input type="file" id="imgSm" name="imgSm" onChange={(e) => setImgSm(e.target.files[0])} />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder="The Snipper" name="title" onChange={handleChange} />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Description</label>
                    <input type="text" placeholder="Description" name="desc" onChange={handleChange} />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Year</label>
                    <input type="text" placeholder="Year" name="year" onChange={handleChange} />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Genre</label>
                    <input type="text" placeholder="genere" name="genere" onChange={handleChange} />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Duration</label>
                    <input type="text" placeholder="duration" name="duration" onChange={handleChange} />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Limit</label>
                    <input type="text" placeholder="limit" name="limit" onChange={handleChange} />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Is Series?</label>
                    <select name="isSeries" id="isSeries" className="newProductSelect" onChange={handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Trailer</label>
                    <input type="file" name="trailer" onChange={(e) => setTrailer(e.target.files[0])} />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Video</label>
                    <input type="file" name="video" onChange={(e) => setVideo(e.target.files[0])}/>
                </div>
                {uploaded === 5 ? (
                    <button className="newProductButton" onClick={handleSubmit}>Add</button>
                ) : (
                    <button className="newProductButton" onClick={handleUpload}>Upload</button>
                )}
            </form>
    </div>
    )
}

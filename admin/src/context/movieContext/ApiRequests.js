import axios from 'axios'
import  { addMovieFail, addMovieStart, addMovieSuccess, deleteMovieFail, deleteMovieStart, deleteMovieSuccess, editMovieFail, editMovieStart, editMovieSuccess, getMoviesFail, getMoviesStart, getMoviesSuccess } from './MovieActions'

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart())

    try {
        const {data} = await axios.get('/movies')
        dispatch(getMoviesSuccess(data))
    } catch (error) {
        dispatch(getMoviesFail())
    }
}

export const addMovie = async (formData, dispatch) => {
    dispatch(addMovieStart())

    try {
        const {data} = await axios.post(`/movies/`, formData)
        dispatch(addMovieSuccess(data))
    } catch (error) {
        dispatch(addMovieFail())
    }
}

export const updateMovie = async (id, formData, dispatch) => {
    dispatch(editMovieStart())

    try {
        const {data} = await axios.put(`/movies/${id}`, formData)
        dispatch(editMovieSuccess(data))
    } catch (error) {
        dispatch(editMovieFail())
    }
}

export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart())

    try {
        await axios.delete(`/movies/${id}`)
        dispatch(deleteMovieSuccess(id))
    } catch (error) {
        dispatch(deleteMovieFail())
    }
}
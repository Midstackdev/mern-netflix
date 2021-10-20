import axios from 'axios'
import  { deleteMovieFail, deleteMovieStart, deleteMovieSuccess, getMoviesFail, getMoviesStart, getMoviesSuccess } from './MovieActions'

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart())

    try {
        const {data} = await axios.get('/movies')
        dispatch(getMoviesSuccess(data))
    } catch (error) {
        dispatch(getMoviesFail())
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
export const getMoviesStart = () => ({
    type: "GET_MOVIES_START"
})

export const getMoviesSuccess = (movies) => ({
    type: "GET_MOVIES_SUCCESS",
    payload: movies
})

export const getMoviesFail = () => ({
    type: "GET_MOVIES_FAIL",

})

export const deleteMovieStart = () => ({
    type: "DELETE_MOVIE_START"
})

export const deleteMovieSuccess = (id) => ({
    type: "DELETE_MOVIE_SUCCESS",
    payload: id
})

export const deleteMovieFail = () => ({
    type: "DELETE_MOVIE_FAIL",

})
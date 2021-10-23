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

export const addMovieStart = () => ({
    type: "ADD_MOVIE_START"
})

export const addMovieSuccess = (movie) => ({
    type: "ADD_MOVIE_SUCCESS",
    payload: movie
})

export const addMovieFail = () => ({
    type: "ADD_MOVIE_FAIL",

})

export const editMovieStart = () => ({
    type: "EDIT_MOVIE_START"
})

export const editMovieSuccess = (id) => ({
    type: "EDIT_MOVIE_SUCCESS",
    payload: id
})

export const editMovieFail = () => ({
    type: "EDIT_MOVIE_FAIL",

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
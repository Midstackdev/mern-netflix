import React, { createContext, useReducer } from 'react'
import MovieReducer from './MovieReducer'

const INITIAL_STATE = {
    movies: [],
    isFetching: false,
    error: false
}

export const MovieContext = createContext(INITIAL_STATE)

export const MovieContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE)

    const values = {
        movies: state.movies,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
    }

    return (
        <MovieContext.Provider value={values}>
            {children}
        </MovieContext.Provider>
    )
}

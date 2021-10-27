import React, { createContext, useReducer } from 'react'
import ListReducer from './ListReducer'

const INITIAL_STATE = {
    lists: [],
    isFetching: false,
    error: false
}

export const ListContext = createContext(INITIAL_STATE)

export const ListContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ListReducer, INITIAL_STATE)

    const values = {
        lists: state.lists,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
    }

    return (
        <ListContext.Provider value={values}>
            {children}
        </ListContext.Provider>
    )
}

import express from 'express'
import morgan from 'morgan'

export const setEnvironment = (app) => {
    if(process.env.NODE_ENV !== 'production') {
        setDevEnv(app)
    }else {
        setProdEnv(app)
    }
}

const setDevEnv = (app) => {
    process.env.NODE_ENV = 'development'
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(morgan('common'))
}

const setProdEnv = (app) => {
    process.env.NODE_ENV === 'production'
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
}
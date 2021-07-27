import userRoutes from './user.js'
import authRoutes from './auth.js'
import movieRoutes from './movie.js'
import listRoutes from './list.js'

export const registerRoutes = (app) => {
    app.use('/api/auth', authRoutes)
    app.use('/api/users', userRoutes)
    app.use('/api/movies', movieRoutes)
    app.use('/api/lists', listRoutes)
}
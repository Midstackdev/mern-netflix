import userRoutes from './user.js'
import authRoutes from './auth.js'

export const registerRoutes = (app) => {
    app.use('/api/auth', authRoutes)
    app.use('/api/users', userRoutes)
}
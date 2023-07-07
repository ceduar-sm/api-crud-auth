import express from 'express'
import morgan from 'morgan'

import userRoutes from './routes/user.routes.js'

const app = express()

// Middlewares
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use('/api', userRoutes)

export default app

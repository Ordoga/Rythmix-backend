import express from 'express'
import cookieParser from 'cookie-parser'
import cors from "cors"
import path from 'path'

import { stationRoutes } from './api/station/station.routes.js'
import { authRoutes } from './api/auth/auth.routes.js'
import { userRoutes } from './api/user/user.route.js'

const port = process.env.PORT || 3030

const app = express()

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname,'public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
        credentials: true
    }  
    app.use(cors(corsOptions))
}   

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/station', stationRoutes)

// app.get('/**', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

app.listen(port, () => console.log(`Server is running on port ${port}`))
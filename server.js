import express from 'express'
import cookieParser from 'cookie-parser'
import cors from "cors"
import { stationRoutes } from './api/station/station.route.js'

const port = process.env.PORT || 3030

const app = express()

const corsOptions = {
    origin: [
        "http://127.0.0.1:5173",
        "http://127.0.0.1:3000",
        "http://localhost:5173",
        "http://localhost:3000",
    ],
    credentials: true,
}

app.use(express.static("public"))
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())


app.use('/station', stationRoutes)

app.listen(port, () => `Server is running on port ${port}`)
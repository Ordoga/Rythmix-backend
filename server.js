import express from 'express'
import cookieParser from 'cookie-parser'
import { stationRoutes } from './api/station/station.route.js'

const port = 3000

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/station', stationRoutes)

app.get('/', function (req, res) {
    res.send('Hello World')
  })
  
app.listen(port, () => `Server is running on port ${port}`)
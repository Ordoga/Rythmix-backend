import express from 'express'

import { getStations, getStation, addStation, updateStation, removeStation } from './station.controller.js'

const router = express.Router()

router.get('/', getStations)
router.get('/:stationId', getStation)
router.post('/', addStation)
router.put('/:stationId', updateStation)
router.delete('/:stationId', removeStation)

export const stationRoutes = router

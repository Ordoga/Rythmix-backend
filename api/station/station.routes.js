import express from 'express'

import { getStations, getStation, addStation, updateStation, removeStation } from './station.controller.js'
import { requireUser } from '../../middlewares/requireAuth.middleware.js'

const router = express.Router()

router.get('/', getStations)
router.get('/:stationId', getStation)
router.post('/', requireUser, addStation)
router.put('/:stationId',requireUser, updateStation)
router.delete('/:stationId', requireUser, removeStation)

export const stationRoutes = router

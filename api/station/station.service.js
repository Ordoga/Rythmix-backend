import { utilService } from "../../services/utilService.js"

export const stationService = {

}

const stations = utilService.readJsonFile('../../data/station.json')

console.log(stations)
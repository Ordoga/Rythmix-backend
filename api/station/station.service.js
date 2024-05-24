import { utilService } from "../../services/utilService.js"

const stations = utilService.readJsonFile('./data/station.json')


export const stationService = {
    query,
    getStation
}

async function query(){
    console.log(stations)
    return stations
}

async function getStation(stationId){
    try{
        const station = stations.find(station => station._id === stationId)
        // TODO : Ask about error handling
        if (!station) return ('Cant find station')
        return station
    }catch(err){
        throw err
    }
}
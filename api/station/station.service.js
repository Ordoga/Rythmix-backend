import { dbService } from "../../services/db.service.js"

// import { utilService } from "../../services/utilService.js"

import mongodb from 'mongodb'
const {ObjectId} = mongodb

// const stations = utilService.readJsonFile('./data/station.json')


export const stationService = {
    query,
    getStationById
}


async function query(){
    try{
        const collection = await dbService.getCollection('station')
        var stationCursor = await collection.find({})
        const stations = stationCursor.toArray()
        return stations
    }catch(error){
        console.log(error)
    }
}

async function getStationById(stationId){
    try{
        const collection = await dbService.getCollection('station')
        var station = await collection.findOne({_id : ObjectId.createFromHexString(stationId)})
        console.log(station)
        return station
    }catch(err){
        throw err
    }
}
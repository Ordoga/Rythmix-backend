import { dbService } from "../../services/db.service.js"

// import { utilService } from "../../services/utilService.js"

import mongodb from 'mongodb'
const {ObjectId} = mongodb

// const stations = utilService.readJsonFile('./data/station.json')


export const stationService = {
    query,
    addStation,
    getStationById,
    updateStation,
    deleteStationById
}


async function query(){
    try{
        const collection = await dbService.getCollection('station')
        var stationCursor = await collection.find({})
        const stations = stationCursor.toArray()
        return stations
    }catch(err){
        console.log(err)
    }
}

async function addStation(station){
    try{
        const collection = await dbService.getCollection('station')
        const response = await collection.insertOne(station)
        return response
    }catch(err){
        console.log(err)
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

async function updateStation(station){
    try{
        const stationToSave = {
            name : station.name,
            songs : station.songs,
            imgUrl : station.imgUrl,
            likedByUsers : station.likedByUsers,
        }
        const collection = await dbService.getCollection('station')
        const response = await collection.updateOne({_id: ObjectId.createFromHexString(station._id)}, {$set : stationToSave})
        return response
    }catch(err){
        throw err
    }
}

async function deleteStationById(stationId){
    try{
        const collection = await dbService.getCollection('station')
        const response = await collection.deleteOne({_id : ObjectId.createFromHexString(stationId)})
        console.log(response)
        return response
    }catch(err){
        throw err
    }
}
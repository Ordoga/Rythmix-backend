import { stationService } from "./station.service.js"

export async function getStations(req,res) {
    console.log("Got Stations")
}

export async function getStation(req,res) {
    console.log("Got Station")
}

export async function addStation(req,res) {
    console.log("Added Station")
}

export async function updateStation(req,res) {
    console.log("Updated Station")
}

export async function removeStation(req,res) {
    console.log("Removed Station")
}
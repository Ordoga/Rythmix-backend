import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import {userService} from '../user/user.service.js'

// const cryptr = new Cryptr(process.env.SECRET || 'Or-Liron')

const jwtSecret = 'Big-Secret-10'

export const authService = {
    signup,
    login,
    getLoginToken,
    validateToken
}

async function login(username, password) {

    const user = await userService.getUserByUsername(username)
    if (!user) return Promise.reject('Invalid username or password')
    const match = await bcrypt.compare(password, user.password)
    if (!match) return Promise.reject('Invalid username or password')
    delete user.password
    // Convert MongoObjectID to a string id
    user._id = user._id.toString()
    return user
}

async function signup({username, password, fullname}) {
    // Missing credentials
    if (!username || !password || !fullname) return Promise.reject('Missing required signup information')
    
    const userExist = await userService.getUserByUsername(username)
    if (userExist) return Promise.reject('Username already taken')
            
    const saltRounds = 10
    const hash = await bcrypt.hash(password, saltRounds)
    const addedUser = await userService.addUser({ username, password: hash , fullname})
    return addedUser
}

function getLoginToken(user) {
    const userInfo = {_id : user._id, fullname: user.fullname}
    const token = jwt.sign(JSON.stringify(userInfo),jwtSecret)
    return token
}

function validateToken(loginToken) {
    try {
        const decodedUser = jwt.verify(loginToken, jwtSecret)
        return decodedUser
    } catch(err) {
        console.log('Invalid login token')
    }
    return null
}
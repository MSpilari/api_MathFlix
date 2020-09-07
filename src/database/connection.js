const { Sequelize } = require('sequelize')

const Category = require('../models/Category')
const Video = require('../models/Video')

const DB_URL = process.env.DB_URL

const connection = new Sequelize(DB_URL)

try{
    connection.authenticate()
    console.log('Connected with ElephantSQL')
}catch(err){
    console.error('Unable to connected with database:', err)
}

Category.init(connection)
Video.init(connection)
Video.associate(connection.models)
Category.associate(connection.models)
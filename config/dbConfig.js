const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const dbName = `b40wde`
const dbUrl = `mongodb+srv://kedar:kedar@cluster0.9nlltji.mongodb.net/${dbName}`

module.exports = { mongodb, MongoClient, dbName, dbUrl }
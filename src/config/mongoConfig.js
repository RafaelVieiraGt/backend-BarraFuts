const mongoose = require('mongoose')

const dbURL = 'mongodb+srv://Rafael:rafael2004@cluster0.csngin0.mongodb.net/futs?retryWrites=true&w=majority'

const connection = mongoose.connect(dbURL)

module.exports = connection;
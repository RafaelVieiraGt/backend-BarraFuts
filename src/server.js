const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()
require('./config/mongoConfig')

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, ()=> console.log("Servidor ouvindo!"))
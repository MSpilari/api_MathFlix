const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const routes = require('./routes')

const app = express()

dotenv.config()

require('./database/connection')

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333, () => console.log('Server is running'))
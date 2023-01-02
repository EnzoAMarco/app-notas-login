const express = require('express')
const dotenv = require('dotenv').config()
const db = require('./routes/db-config')
const cookie = require('cookie-parser')
const app = express()

db.connect(e => {if (e) throw e})

app.use(cookie())
app.use(express.json())
app.use('/api', require('.controllers/app'))

app.listen(PORT)
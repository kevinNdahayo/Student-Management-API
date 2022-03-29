const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const studentRoutes = require('./api/routes/students')
const corsErrorsController = require('./api/controllers/corsErrors.controller')
const {
  ErrorInfo,
  ErrorMessage,
} = require('./api/controllers/ErrorHandling.controller')

//Middlewares
app.use(express.json())
app.use(corsErrorsController)
app.use('/students', studentRoutes)
app.use(ErrorInfo)
app.use(ErrorMessage)

module.exports = app

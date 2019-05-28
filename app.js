require('dotenv').config()

const createError = require('http-errors')
const express = require('express')
const logger = require('morgan')
const cronRoute = require('./src/crons/cron.router')
const homeRouter = require('./src/home/home.router')
const app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

/**
 * Routers
 */
app.use('/', [homeRouter])
app.use('/crons', cronRoute)

app.use(function (req, res, next) {
  next(createError(404))
})

app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
})

module.exports = app

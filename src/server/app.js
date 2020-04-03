const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const aylien = require('aylien_textapi')
var requestPost = require('./handleRequest')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }))
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

app.post('/sentiment', requestPost.validateInputRequest, requestPost.PostHandler )

module.exports = app;
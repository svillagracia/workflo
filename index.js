const express = require('express')
    , request = require('request')
    , bodyParser = require('body-parser')
    , path = require('path')
    , port = process.env.PORT || 3000
    , app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(port)

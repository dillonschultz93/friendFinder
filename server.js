// == packages ================================================================
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

//== initalize express ========================================================
const app = express()
let port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

require('./app/routing/apiRouting.js')(app)
require('./app/routing/htmlRouting.js')(app)

app.listen(port, () => {
  console.log(`Listening on PORT: ${port}`)
})
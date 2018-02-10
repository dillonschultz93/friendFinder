// == packages ================================================================
const express = require('express')
const bodyParser = require('body-parser')

//== initalize express ========================================================
const app = express()
let port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// routing by using currying
require('./app/routing/apiRouting.js')(app)
require('./app/routing/htmlRouting.js')(app)

// start server
app.listen(port, () => {
  console.log(`Listening on PORT: ${port}`)
}) 
 const path = require('path')
 
 module.exports = (app) => {
   //shows home page
   app.get('/', (request, response) =>{
     response.sendFile(path.join(__dirname, '../public/home.html'))
   })
   
   app.get('/survey',(request, response) =>{
     response.sendFile(path.join(__dirname, '../public/survey.html'))
   })
 }
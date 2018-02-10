// import data
const users = require('../data/friends.js')

// export routing
// wrap the routes in a function
module.exports = (app) => {
  
  // API GET requests
  app.get('/api/friends/', (req, res) => {
    res.json(users)
  }) 
  
  // API POST request 
  app.post('/api/friends/', (req, res) => {
    let userData = req.body
    
    //takes the user inputed score and parses the integer
    let userScore = userData.scores.map((item) => {
      return parseInt(item, 10)
    })

    let friendName = ''
		let friendPhoto = ''
		let totalDifference = 1000
    
    for(let index = 0; index < users.length; index++) {
      let difference = 0
      for(let indexTwo = 0; indexTwo < userScore.length; indexTwo++){
        difference += Math.abs(
          users[index].scores[indexTwo] - userScore[indexTwo]
        )
      }
      if(difference < totalDifference) {
        totalDifference = difference
        friendName = users[index].name
        friendPhoto = users[index].photo
        
        console.log(totalDifference)
        console.log(friendName)
        console.log(friendPhoto)
        
      }
    }
    users.push(userData)
    
    res.json(newUser)
  })
}
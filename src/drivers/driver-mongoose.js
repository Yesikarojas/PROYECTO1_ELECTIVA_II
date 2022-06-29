const mongoose = require('mongoose')
const URI = 'mongodb://127.0.0.1:27017/proyect_medical'

mongoose.connect(URI)
 .then(()=>console.log('Connect Success MongoDB'))
 .catch(error => console.log(`Error:${error}`))

module.exports = mongoose
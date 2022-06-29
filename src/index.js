
const express = require('express')

const app = new express()

//conexion al BD
require('./drivers/driver-mongoose')
//middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json())
//settings
app.set('port', process.env.PORT || 3000)

//routing
app.use('/patients', require('./routes/patient'))
app.use('/doctors', require('./routes/doctor'))
app.use('/consult', require('./routes/consultation'))
//begin
app.listen(app.get('port'),()=>{
    console.log(`Server listen at port ${app.get('port')}`)
})

//probando rama develop_back 
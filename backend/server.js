const express = require('express')
const bodyParser=require('body-parser')
const app = express()
const port = 4000
require('./config/db')
const cors = require('cors')

app.use((req,res,next)=>{
    console.log('path',req.path);
    next()
})



app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use('/api',require('./src'))

app.get('/',(req,res)=>{
    res.send('hello word')
})

app.listen(port,()=>{
   console.log('server running on ',port);
})